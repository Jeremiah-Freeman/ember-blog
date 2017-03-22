import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blog) {
      if (confirm('Are you sure?')) {
        this.sendAction('destroyDetail', blog);
      }
    }
  }
});
