import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DsUlComponent extends Component {
  @tracked currentIconSize;
}
