# How to contribute

## Initial setup

*Notice: [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/getting-started/install) needs to be installed on your local machine.*

* `git clone <repository-url>`
* `cd flight/flight-icons`
* `yarn install`

## Linting

* `yarn run lint`

## TypeChecking

* `yarn typecheck`

## Running the scripts

* `yarn sync`
* `yarn build`

See below for more details about what these scripts do.

-----

# Updating the icons in `flight-icons`

Whenever there is an update to the Flight Icons library in Figma (e.g. a new icon is added), these changes need to be transfered also to the code. This means updating the `flight-icons` package and then releasing it to the npm registry, so that can be used by other tools and projects.

We have developed a set of custom Node.js scripts, to create a single pipeline for this purpose. 

You can run the [Sync & Build Icons action](https://github.com/Dhaulagiri/flight/actions/workflows/open-pull-request-for-icon-update.yml) on the [Actions tab in GitHub](https://github.com/hashicorp/flight/actions) to create a PR with the updated icons automatically (and the version bumped as `minor`), or the pipeline can be run manually on your local machine using these instructions.

## Before you run the scripts

* Make sure you have:
  * done the initial setup of the project (see details above)
  * added the Figma token to your environment (see details below)
* Make sure your local `main` branch is up to date
* Create a custom branch from `main`.

## Sync

The "sync" step exports the assets from Figma and saves them in the project.
You can find the code that relates to this step in the file `/scripts/sync.ts`.

To run this script launch the following commands in your CLI (while in the `flight-icons` folder):

```bash
yarn sync
```

This action will:

* Retrieve the assets metadata from Figma via REST API
* Export the assets as `.svg` files into `./svg-original/`
* Generate the `catalog.json` file

## Build

The "build" step takes the assets exported from Figma, optimize and process them, and saves the final SVG files in the bundles that will be published as npm package.
You can find the code that relates to this step in the file `/scripts/build.ts`.

To run this script use the following command in your CLI (while in the `flight-icons` folder):

```bash
yarn build
```

This action will:

* Optimize the SVG files and save then in a `temp` folder
* Process the optimized SVG files and save then in the `svg` folder as standalone SVG files
* Process the optimized SVG files and save then in the `svg-sprite` folder as SVG sprite within a JavaScript module

## After you have run the scripts

* Check the git diff:
  * if you see only the `lastRunTimeISO` value changed in the `catalog.json` file it means there are no updated to the icons, so there's no need to commit the changes.
  * if there were changes to the icons, you will see changes to the `catalog.json` file and to the content of the `svg` and `svg-sprite` folders.
* Commit and push the changes, then submit a pull request in GitHub.
* Once approved and merged to the `main` branch, you can proceed to the release phase.

## Releasing a new npm version of the package

See the [RELEASE](../RELEASE.md) guide for details.

### Figma Token

To access the Figma file via REST API is necessary to have [a special authentication token](https://www.figma.com/developers/api#access-tokens). This token is personal, should not be shared or committed to the repo.

To create your personal access token, open Figma and go into *Account > Personal access tokens* and create one for yourself.

Next, add a `.env` file in the `flight/flight-icons` directory, to which you will add the variable:

`FIGMA_TOKEN=###`

where `###` is your personal access token. You can use the `.env.template` file you find in the repository as model, if you want.

**IMPORTANT**: the `.env` file is ignored by git, and should not be committed to the repository.

Once you've done the initial setup, there are distinct steps in the process to follow to update the icons.
