import Ember from 'ember';

export default Ember.Route.extend({
   model(params) {
     return this.store.findRecord('blog', params.detail_id);
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
     destroyDetail(blog) {
       blog.destroyRecord();
       this.transitionTo('index');
     }
   }
});
