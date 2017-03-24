import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editingQuestion: false,
    showUpdateQuestionForm() {
      this.set("editingQuestion", true);
    },
    updateQuestion(question){
      var params = {
        author: this.get("author"),
        title: this.get("title"),
        content: this.get("content"),
        addtl: this.get("addtl"),
      };
      this.set("editingQuestion", false);
      this.sendAction("updateQuestion", question, params);
    }
  }
});
