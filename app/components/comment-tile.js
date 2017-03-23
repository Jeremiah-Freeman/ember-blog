import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if (confirm('You sure?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
