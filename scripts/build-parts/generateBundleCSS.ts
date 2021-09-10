import fs from 'fs-extra';
import chalk from 'chalk';

import { ConfigData } from '../@types/ConfigData';
import { AssetsCatalog } from '../@types/AssetsCatalog';

// see https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
import svgToMiniDataURI from 'mini-svg-data-uri';

export async function generateBundleCSS({ config, catalog }: { config: ConfigData, catalog: AssetsCatalog }): Promise<void> {

    // TODO add better logging
    console.log('generateBundleSVGStore');

    const tempSVGFolderPath = `${config.syncOutputFolder}/svg`;
    const distBundleFolderPath = `${config.buildDistFolder}/flight-icons-css`;

    // create the destination folder
    fs.mkdirs(distBundleFolderPath);

    // copy the assets catalog file
    fs.copy(`${config.syncOutputFolder}/catalog.json`, `${distBundleFolderPath}/catalog.json`);


    let cssContent = '/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */\n';
    let cssAltContent = '/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */\n';
    let sassContent = '// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n';

    for (const { fileName } of catalog.assets) {

        // get the optimized SVG and urlencode it
        const svgOptimized = await fs.readFile(`${tempSVGFolderPath}/${fileName}.svg`, 'utf8');
        const svgUrlEncoded = svgToMiniDataURI(svgOptimized);

        // add an entry to each CSS file
        const urlDataImage = `url("data:image/svg+xml;utf8,${svgUrlEncoded}")`
        cssContent += `.flight-icon-${fileName} { background-image: ${urlDataImage}; }\n`;
        cssAltContent += `.flight-icon-${fileName} { --flight-icon-data-image: ${urlDataImage}; }\n`;
        sassContent += `%flight-icon-${fileName}-prop { --flight-icon-data-image: ${urlDataImage}; }\n`;
    }

    // save the CSS files in the destination folder
    await fs.writeFile(`${distBundleFolderPath}/flight-icons.css`, cssContent);
    await fs.writeFile(`${distBundleFolderPath}/flight-icons.css`, cssAltContent);
    await fs.writeFile(`${distBundleFolderPath}/flight-icons.sass`, sassContent);

    // TODO something else?
}