import Ember from 'ember';

export default Ember.Select.extend({
  content: [true, false],
  id: 'featured',
  required: 'true',
  prompt: 'Please Choose...',
});
