import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class DocsIndexRoute extends Route {
  @service markdownResolver;

  model() {
    return this.markdownResolver.tree('docs').then((tree) => {
      return new RSVP.Promise((resolve) => {
        const sortedPosts = tree.files.sortBy('attributes.date').reverse();
        resolve(sortedPosts);
      });
    });
  }
}
