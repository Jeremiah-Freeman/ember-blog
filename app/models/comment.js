import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  blog: DS.belongsTo('blog', { async: true })
});
