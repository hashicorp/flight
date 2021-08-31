# flight-icons

An addon for the icons from `flight`. Currently in development. This addon can be used in React or Ember apps.

## Installation

```bash
yarn add @hashicorp/flight-icons
```

## Usage

We intend for icons to be used at a 16 or 24 `viewBox` size.

### How to choose 16 or 24 `viewBox` size

* If an icon is in a `viewBox` <= 16, use the `-16` version of the icon.
* If an icon is in a 16 < `viewBox` < 24, default to the `-16` version of the icon. If you're not sure, please ping the Design Systems team: [@hashicorp/design-systems on GitHub](https://github.com/orgs/hashicorp/teams/design-systems) or [#team-design-systems on Slack](https://app.slack.com/client/T024UT03C/C7KTUHNUS/thread/C7KTUHNUS-1630354922.058700).
* If an icon is in a `viewBox` >= 24, use the `-24` version of the icon.

### Guidelines for other sizes

* If you're scaling an icon with a parent component or styling, do **not** stretch a `-16` icon to a `24` viewBox.

## Contributing

🚧 TBD

## License

This project is licensed under the [Mozilla Public License 2.0](LICENSE.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning.
