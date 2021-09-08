const VERBOSE = false; // verbose logging for development
global.verbose = VERBOSE;

import dotenv from 'dotenv';
import fs from 'fs-extra';
import del from 'del';
import chalk from 'chalk';
import isEqual from 'lodash/isEqual';

import { getAssetsMetadata } from './sync-parts/getAssetsMetadata';
import { getAssetsCatalog } from './sync-parts/getAssetsCatalog';

// read the environment variables from the ".env" file
dotenv.config();

// read our custom config
import { config } from './config';
import { exportAssetsToFolder } from './sync-parts/exportAssetsToFolder';

(async () => {
    try {
        console.log('\n==========\nFigma sync started...\n==========\n');

        // make sure the user has a ".env" file that contains the required REST API token
        if (!process.env.FIGMA_TOKEN) {
            console.error(chalk.red('ERROR:\nPlease create a ".env" file in the folder with a "FIGMA_TOKEN" variable in it.\nFor more details please look at the documentation.'));
        } else {
            await sync();
        }

        console.log('\n==========\nFigma sync completed.\n==========\n');

    } catch (err) {
        console.error(err);
        process.exit(1);

    }
})();

async function sync() {

    // remove existing output folder
    if (VERBOSE) {
        console.log('Removing "sync" output folder');
    }
    del.sync(config.outputFolder, { force: true });

    // retrieve the assets metadata via REST api
    const assetsMetadata = await getAssetsMetadata();
    if (VERBOSE) {
        console.log('\nRetrieved assetsMetadata:\n', JSON.stringify(assetsMetadata));
    }

    // export the assets from Figma to the filesystem
    const figmaExportPageNode = await exportAssetsToFolder({ config, assetsMetadata });

    // check that all the assets have been exported correctly
    const assetsExportedIDs = figmaExportPageNode[0].components.map((component) => component.id);
    const assetsExpectedIDs = Object.keys(assetsMetadata);
    if (isEqual(assetsExportedIDs.sort(), assetsExpectedIDs.sort())) {

        // get the assets "catalog" (will be used by multiple consumers) and save it as JSON file
        const assetsCatalog = getAssetsCatalog({ config, assetsMetadata, figmaExportPageNode });
        try {
            fs.writeJsonSync(`${config.outputFolder}/catalog.json`, assetsCatalog, { spaces: 2 });
        } catch (err) {
            console.error(err);
        }

    } else {
        console.log(chalk.red(`WARNING:\nThe number of assets retrieved (${assetsExportedIDs.length}) and the number of assets expected (${assetsExpectedIDs.length}) are different. Please check why, this is unexpected.`));
    }
}
