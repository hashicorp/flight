import dotenv from 'dotenv';
import fs from 'fs-extra';
import del from 'del';
import chalk from 'chalk';
import isEqual from 'lodash/isEqual';

import { getAssetsMetadata } from './sync-parts/getAssetsMetadata';
import { getAssetsCatalog } from './sync-parts/getAssetsCatalog';
import { exportAssetsToFolder } from './sync-parts/exportAssetsToFolder';

// read the environment variables from the ".env" file
dotenv.config();

// read our custom config
import { config } from './config';

(async () => {
    try {
        console.log(`\n==========\n${chalk.cyan('Figma sync started...')}\n==========\n`);

        // make sure the user has a ".env" file that contains the required REST API token
        if (!process.env.FIGMA_TOKEN) {
            console.error(chalk.red('ERROR:\nPlease create a ".env" file in the folder with a "FIGMA_TOKEN" variable in it.\nFor more details please look at the documentation.'));
        } else {
            await sync();
        }

        console.log(`\n==========\n${chalk.green('Figma sync completed.')}\n==========\n`);

    } catch (err) {
        console.error(err);
        process.exit(1);

    }
})();

async function sync() {

    // remove existing output folder
    /* 
        Question: do we need to run this every time, or could we just overwrite icons that have changed? 
        No strong opinion, just curious of the thought here. 
        I guess the catalog.json has the date, so the corresponding SVGs should also be fresh.
        
        - Is a good next step to have ember-flight-icons consume flight-icons? 
        - I'm not really following flight-icons-svg vs. flight-icons-svg-sprite. Those could also be packages if we want everything atomic?
        - For context, the issue in ember-flight-icons consuming flight-icons before, was in stepping through
        the flight-icons sprite file in Ember for the `use`. I timeboxed it, but can figure it out, if that's the direction we're going.
    */
    try {
        console.log('Removing "sync" output folder');
        del.sync(config.srcFolder, { force: true });
    } catch (err) {
        console.error(err);
    }

    // retrieve the assets metadata via REST api
    console.log('Retrieving assets metadata via REST API');
    const assetsMetadata = await getAssetsMetadata();

    // export the assets from Figma to the filesystem
    console.log('Exporting assets via "figma-export" to SVG files\n');
    const figmaExportPageNode = await exportAssetsToFolder({ config, assetsMetadata });

    // check that all the assets have been exported correctly
    const assetsExportedIDs = figmaExportPageNode[0].components.map((component) => component.id);
    const assetsExpectedIDs = Object.keys(assetsMetadata);
    if (isEqual(assetsExportedIDs.sort(), assetsExpectedIDs.sort())) {

        // get the assets "catalog" (will be used by multiple consumers) and save it as JSON file
        const assetsCatalog = getAssetsCatalog({ config, assetsMetadata, figmaExportPageNode });
        try {
            console.log('Saving "catalog.json" file');
            fs.writeJsonSync(`${config.srcFolder}/catalog.json`, assetsCatalog, { spaces: 2 });
        } catch (err) {
            console.error(err);
        }

    } else {
        console.log(chalk.red(`WARNING:\nThe number of assets retrieved (${assetsExportedIDs.length}) and the number of assets expected (${assetsExpectedIDs.length}) are different. Please check why, this is unexpected.`));
    }
}
