import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DsToggleButtonComponent extends Component {
  @tracked visibleIconSize = '16';
  @tracked isDefaultIconSize = true;

  @action
  updateVisibleIconSize() {
    if (this.visibleIconSize === '16') {
      this.visibleIconSize = '24';
      this.isDefaultIconSize = false;
    } else {
      this.visibleIconSize = '16';
      this.isDefaultIconSize = true;
    }
    // TODO take this out before publishing
    console.log(
      `visibleIconSize is ${this.visibleIconSize} and isDefaultIconSize is ${this.isDefaultIconSize}`
    );
  }
}
