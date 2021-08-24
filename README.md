# Flight

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

## Development instructions

Following an export from Figma, you'll need to generate the sprite file, [sprite.svg](ember-flight-icons/public/icons/sprite.svg), follow the instructions in the README of [edenspiekermann/sprite.sh](https://github.com/edenspiekermann/sprite.sh) e.g.

- `cd export-go/dist` so that the `sprite.svg` file will be created in the right directory
- `npx spritesh`

## How to consume the Ember addon

Please see [ember-flight-icons/README](ember-flight-icons/README.md).

## How to consume just the SVGs in your Ember or React app

Use [npmjs.com/package/@hashicorp/flight-icons](https://www.npmjs.com/package/@hashicorp/flight-icons), which is currently in beta.
