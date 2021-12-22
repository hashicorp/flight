import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';

import catalog from '@hashicorp/flight-icons/catalog.json';

const checkIsShown = function (searchText, meta) {
  if (searchText === '') {
    return true;
  }

  if (meta.searchable.indexOf(searchText) !== -1) {
    return true;
  }

  return false;
};

export default class DsIconGridComponent extends Component {
  @tracked icons = [];
  @tracked size = '16';
  @tracked color = 'currentColor';
  @tracked searchText = '';

  @tracked search;
  @tracked emptyResults = false;

  @tracked currentIconSize = '16';
  @tracked visibleIconSize = '16';

  constructor(...args) {
    super(...args);
    this.load();
  }

  get contextRootURL() {
    const config = getOwner(this).resolveRegistration('config:environment');
    return config.rootURL || '/';
  }

  async load() {
    this.icons = catalog.assets.map(
      ({ iconName, fileName, size, description }) => {
        return {
          iconName: `${iconName}`,
          name: `${fileName}`,
          size: `${size}`,
          searchable: `${iconName}, ${description}`,
        };
      }
    );
  }

  @action
  async updateSearchText(value, signal) {
    await new Promise((resolve) => setTimeout(resolve, 190));

    if (signal.aborted) {
      return;
    }

    this.search = value;
    const lowcased = value.toLowerCase();

    for (let i = 0; i < this.icons.length; i++) {
      const item = this.icons[i];

      set(item, 'isHidden', !checkIsShown(lowcased, item));
    }

    this.emptyResults = this.icons.every(({ isHidden }) => isHidden);
  }

  @action
  debouncedUpdate(event) {
    if (this.ctrl) {
      this.ctrl.abort();
    }
    this.ctrl = new AbortController();
    this.updateSearchText(event.target.value, this.ctrl.signal);
  }

  @action
  updateVisibleIconSize() {
    if (this.visibleIconSize === '16') {
      this.visibleIconSize = '24';
    } else {
      this.visibleIconSize = '16';
    }
  }
}
