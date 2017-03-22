import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    showForm() {
      this.set('updatePostForm', true);
    },
    update(blog) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        story: this.get('story'),
        image: this.get('image'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
