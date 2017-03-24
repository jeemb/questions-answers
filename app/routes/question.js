import Ember from 'ember';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  addtl: DS.attr()
}); 
