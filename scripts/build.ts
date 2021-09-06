/*
this script will broadly follow this logic:

INIT
- get a few options from the command line arguments [TBD, it depends on how we want to use the script]
- read a configuration file to get the list of files/pages/frames we want to sync from

SYNC
- loop over the files, pages and frames to get a list of all the icons (Figma "components") we need to export
- loop over the list of assets we need to process and for each one of them
  - get all the relevant meta-data about the asset
    - component set name (will be used later to save the SVGs with a more meaningful filename)
    - size
    - description (used to provide alternative search terms)
  - download the asset in SVG format and rename it accordingly (if in the future we may need different formats (eg. PNG for email) we'll modify the script accordingly)
- save a "catalog.json" file containing the list of assets and their relevant metadata

BUILD
- create a TEMP directory (will be ignored anyway by git)
- copy the SVG folder in the TEMP directory
- optimize the SVG files via SVGO (if we need different optimizations for different targets, we'll create different folders in the TEMP directory)
- empty the DIST directory (if already exists)
- using the optimized generate in the DIST the files required by the the different "formats" that we want to distribute (the one below is just an example)
  - SVG - these will be plain SVG files
  - SVG sprite - this will be later consumed by the Ember Addon
  - Ember Addon - NOTICE: at the moment I don't have enough knowledge of how an Ember addon is created; likely I'll  just reuse the existing process and just update it to have the DIST folder in the root as destination; in a second iteration I'll try to understand if there is space for improvement there too
  - React - in case someone wants to consume the icons as React components, not inline SVGs
  - CSS - this needs to be discussed, but I am in favour of this format
  - other formats? TBD (probably not)
- delete the TEMP directory

The script will be split in multiple files, containing specific functions/modules, collected under the "build-parts" folder

Notice: we may decide to move the "sync" part out of this script, as a standalone callable command in the package.json

*/