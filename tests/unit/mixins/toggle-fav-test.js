import Ember from 'ember';
import ToggleFavMixin from '../../../mixins/toggle-fav';
import { module, test } from 'qunit';

module('Unit | Mixin | toggle fav');

// Replace this with your real tests.
test('it works', function(assert) {
  var ToggleFavObject = Ember.Object.extend(ToggleFavMixin);
  var subject = ToggleFavObject.create();
  assert.ok(subject);
});
