# Flight

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)

## Website

You can view and search the list of available icons at this URL:

https://flight-staging.vercel.app/

_Notice: we have built this micro-website as quick reference for designers and developers; later will likely be embedded in a fully fledged "design system" website._

## Consumer instructions

### How to consume @hashicorp/ember-flight-icons

[![npm version](https://badge.fury.io/js/%40hashicorp%2Fember-flight-icons.svg)](https://badge.fury.io/js/%40hashicorp%2Fember-flight-icons)

🚨 Note: npm addon is currently in beta and not intended for production use yet.

Please see [ember-flight-icons/README](ember-flight-icons/README.md). This addon can be used in Ember apps.

### How to consume @hashicorp/flight-icons

[![npm version](https://badge.fury.io/js/%40hashicorp%2Fflight-icons.svg)](https://badge.fury.io/js/%40hashicorp%2Fflight-icons)

🚨 Note: npm addon is currently in beta and not intended for production use yet.

Please see [flight-icons/README](flight-icons/README.md). This addon can be used in React or Ember apps.

### How to consume an icon in Figma

1. Open your project file within Figma
2. Navigate to the Assets panel in the left sidebar
3. Enable the [Flight Icons](https://www.figma.com/file/TLnoT5AYQfy3tZ0H68BgOr/Flight-Icons?node-id=164%3A0) Library  
_Click the Team library icon (looks like an open book), toggle on Flight Icons_
4. Search or scroll to find the icon you want to use and drag it into your file

💡 Tip: Swapping instances, sizes, and colors is easy to do from the right sidebar

## Best Practices

### Icon Types

![example of icon types](ember-flight-icons/tests/dummy/public/assets/images/icon-types.png)

### Icon Sizes

![example of icon sizes](ember-flight-icons/tests/dummy/public/assets/images/icon-sizes.png)

### States

![example of icon states](ember-flight-icons/tests/dummy/public/assets/images/icon-states.png)

### Actions

![example of common actions](ember-flight-icons/tests/dummy/public/assets/images/icon-actions.png)

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

### How to contribute a new icon in Figma (HashiCorp staff only)

1. [Open a GitHub issue](https://github.com/hashicorp/flight/issues/new) to kick-off work on adding a new icon  
_Outline the use case for a new icon, why an existing icon isn't a good fit if there is one, and include any screenshots or WIP if you've done some initial work on a proposal for the icon._

2. If you're ready to develop the new icon, create a new branch within [✏️Flight Development](https://www.figma.com/file/MYiw4kiVpunIMMw0sBkE1t/%E2%9C%8F%EF%B8%8F-Flight-Development?node-id=205%3A0)  
_You can do this from the Main menu (File > Create branch...)_  
_Take care to avoid working directly in the default branch!_

3. Use the template component in the `Flight Icons - Dev` frame  
_Keep your work in this frame, but feel free to create as many versions with that template component as you need._

4. Draw your icon glyph using vectors  
_Be sure to follow the design guide in the Figma file, taking care to follow the conventions around strokes, corner radius and aligning to the grid. Try to preserve the ability to edit the glyph where possible (avoid flattening)._

5. When your icon is ready, post to the original GitHub issue to close the loop  
_The Design Systems team will then add the icon to the grid, productionize it, and publish from the [production file](https://www.figma.com/file/TLnoT5AYQfy3tZ0H68BgOr/Flight-Icons?node-id=164%3A0)._

## License

This project is licensed under the [Mozilla Public License 2.0](LICENSE.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning.