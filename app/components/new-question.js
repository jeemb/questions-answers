import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewQuestion: false,
    showAddQuestionForm() {
      this.set("addNewQuestion", true);
    },
    saveNewQuestion() {
      var params = {
        author: this.get("author"),
        title: this.get("title"),
        content: this.get("content"),
        addtl: this.get("addtl")
      };
      this.set("addNewQuestion", false);
      this.sendAction("saveNewQuestion", params);
      )
    }
  }
});
