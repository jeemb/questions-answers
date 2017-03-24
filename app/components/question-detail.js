import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyQuestion1(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction("destroyQuestion2", question);
      }
    }
  }
});
