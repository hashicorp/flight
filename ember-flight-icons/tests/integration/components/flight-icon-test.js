import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | flight-icon', function (hooks) {
  setupRenderingTest(hooks);

  // the component should render
  test('it renders the icon', async function (assert) {
    await render(hbs`<FlightIcon @name="activity" />`);
    assert
      .dom('svg.flight-icon.icon-activity.display-inline')
      .matchesSelector('svg');
  });
  // the component should have a matching class name
  test('it should have a class name that is the same as the component name', async function (assert) {
    await render(hbs`<FlightIcon @name="activity" />`);
    assert.dom('svg').hasClass('flight-icon');
  });
  // the component should have aria-hidden as true
  test('it has aria-hidden set to true', async function (assert) {
    await render(hbs`<FlightIcon @name="activity" />`);
    assert
      .dom('svg.flight-icon.icon-activity.display-inline')
      .hasAttribute('aria-hidden');
  });
  // the component should render the 16x16 icon by default
  test('it renders the 16x16 icon by default', async function (assert) {
    await render(hbs`<FlightIcon @name="activity" />`);
    assert
      .dom('svg.flight-icon.icon-activity.display-inline')
      .hasAttribute('viewBox', '0 0 16 16');
  });
  // the component should render the 24x24 icon if size is set
  test('it renders the 24x24 icon when option is set', async function (assert) {
    await render(hbs`<FlightIcon @name="activity" @size="24" />`);
    assert
      .dom('svg.flight-icon.icon-activity.display-inline')
      .hasAttribute('viewBox', '0 0 24 24');
  });
  // the component should not have a class of `display-inline` if that option has been set
  test('it does not have the display-inline class if the option is set to false', async function (assert) {
    await render(hbs`<FlightIcon @name="activity" @isInlineBlock={{false}} />`);
    assert.dom('svg.flight-icon').doesNotHaveClass('display-inline');
  });
  // the component should support appending additional CSS classes when invoked
  test('additional classes can be added when component is invoked', async function (assert) {
    await render(hbs`<FlightIcon @name="meh" class="demo" />`);
    assert.dom(`svg.flight-icon`).hasClass('demo');
  });
  // The component color property should accept :root variable values
  test('the color property should accept :root variable values', async function (assert) {
    await render(
      hbs`<FlightIcon @name="alert-circle" @color="var(--danger-d1)" />`
    );
    assert.dom(`svg.flight-icon`).hasStyle({
      fill: 'rgb(186, 34, 38)',
    });
  });
  // the component should have `color` set to `currentColor` (black) by default
  test('the fill should be set to black by default', async function (assert) {
    await render(hbs`<FlightIcon @name="meh" />`);
    assert.dom(`svg.flight-icon`).hasStyle({
      fill: 'rgb(0, 0, 0)',
    });
  });
  // currentColor should change per inheritance rules
  test('The fill color should be able to be inherited from parent', async function (assert) {
    await render(
      hbs`<div style="color:blue;"><FlightIcon @name="meh" /></div>`
    );
    assert.dom(`svg.flight-icon`).hasStyle({
      fill: 'rgb(0, 0, 255)',
    });
  });
  // TODO: there should be an error if an icon name is not provided
});
