# How To Contribute

## Installation

* `git clone <repository-url>`
* `cd flight-icons-ember`
* `yarn install`

## Linting

* `yarn run lint`
* `yarn run lint:fix`

## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Test locally with another repository

* `cd flight/flight-icons-ember` (this directory)
* Run `yarn link`. You'll get a response such as:

```
success Registered "@hashicorp/flight-icons-ember".
info You can now run `yarn link "@hashicorp/flight-icons-ember"` in the projects where you want to use this package and it will be used instead.
✨  Done in 0.06s.
```

If necessary, run a `yarn unlink`.

* In your external repo, e.g. https://github.com/hashicorp/design-system-playground-fastboot, run `yarn link "@hashicorp/flight-icons-ember"`
* In your external repo, manually add the path to the `package.json`. For example:

```json
"devDependencies": {
  "@hashicorp/flight-icons-ember": "link:~/your-path-here/flight/flight-icons-ember",
}
```

* Run `yarn` or `yarn install`
* You may need to copy code such as https://github.com/hashicorp/flight/blob/main/flight-icons-ember/tests/dummy/app/templates/application.hbs into the external app's `application.hbs` to see the results.
* If you want to test local changes to `flight-icons-ember`, add `isDevelopingAddon` to `flight-icons-ember/index.js`. The file will look something like the following:

```js
'use strict';

module.exports = {
  name: require('./package').name,
  isDevelopingAddon() {
    return true;
  },
};
```
