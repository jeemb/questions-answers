import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  addtl: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
