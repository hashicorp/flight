import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DsToggleButtonComponent extends Component {
  @tracked visibleIconSize = '16';

  @action
  updateVisibleIconSize() {
    if (this.visibleIconSize === '16') {
      this.visibleIconSize = '24';
    } else {
      this.visibleIconSize = '16';
    }
    // TODO take this out before publishing
    console.log(`visibleIconSize is ${this.visibleIconSize}`);
  }
}
