import Ember from 'ember';

export default Ember.Component.extend({
  addPostForm: false,
  actions: {
    showForm() {
      this.set('addPostForm', true);
    },
    saveBlog1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        story: this.get('story'),
        image: this.get('image'),
      };
      this.set('addPostForm', false);
      this.sendAction('saveBlog2', params);
    }
  }
});
