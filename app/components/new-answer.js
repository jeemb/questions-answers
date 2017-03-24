import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewAnswer: false,
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
