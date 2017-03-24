import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Mary",
  title: "What is dihydrogen monoxide?",
  content: "HELP",
  addtl: "extra extra"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
