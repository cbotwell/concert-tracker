import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('venue-upcoming-concerts', 'Integration | Component | venue upcoming concerts', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{venue-upcoming-concerts}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#venue-upcoming-concerts}}
      template block text
    {{/venue-upcoming-concerts}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
