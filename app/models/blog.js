import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  story: DS.attr(),
  image: DS.attr(),
  author: DS.attr()
});
