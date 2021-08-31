import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocsPostRoute extends Route {
  @service markdownResolver;

  model({ path }) {
    // We have to handle removing the slash that we need for pulling static html from most servers
    const withoutSlash = !path.endsWith('/') ? path : path.slice(0, -1);
    return this.markdownResolver.file('docs', withoutSlash);
  }
}
