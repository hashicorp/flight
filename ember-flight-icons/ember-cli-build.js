'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    prember: {
      urls: buildPremberUrls(),
    },
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  // const { maybeEmbroider } = require('@embroider/test-setup');
  // return maybeEmbroider(app);
  return app.toTree();
};

function buildPremberUrls() {
  // Build prember urls
  const urls = ['/docs/post/'];

  const { extname } = require('path');
  const walkSync = require('walk-sync');

  const paths = walkSync('tests/', {
    includeBasePath: true,
    globs: ['dummy/**/*.md'],
  });
  console.log(`paths: ${paths}`);
  const mdFiles = paths
    .filter((path) => extname(path) === '.md')
    .map((path) => {
      const stripMD = path.replace(/\.md/, '');
      return `/docs/${stripMD}/`;
    });

  mdFiles.forEach((file) => {
    urls.push(file);
  });

  return urls;
}
