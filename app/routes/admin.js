import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      comments: this.store.findAll('comment'),
      posts: this.store.findAll('blog')
    });
  },
    actions: {
      update(blog, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            blog.set(key,params[key]);
          }
        });
        blog.save();
        this.transitionTo('detail');
      },
      saveBlog3(params)  {
        var newBlog = this.store.createRecord('blog', params);
        newBlog.save();
        this.transitionTo('index');
      },
      saveComment3(params)  {
        var newComment = this.store.createRecord('comment', params);
        var blog = params.blog;
        blog.get('comments').addObject(newComment);
        newComment.save().then(function() {
          return blog.save();
        });
        this.transitionTo('blog', blog);
      },
      destroyDetail(blog) {
        var comment_deletions = blog.get('comments').map(function(comment) {
          return comment.destroyRecord();
        });
        Ember.RSVP.all(comment_deletions).then(function() {
          return blog.destroyRecord();
        });
        this.transitionTo('index');
      },
      destroyComment(comment) {
        comment.destroyRecord();
        this.transitionTo('detail');
      },
  }
});
