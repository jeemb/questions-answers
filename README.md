# questions-answers

This is a questions and answers forum created with ember.js! Users are able to add/update/delete questions and add answers to questions.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd questions-answers`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Specifications
|Behavior|Input|Output|
|--------|-----|------|
|User can add a question and it will display on homepage| "What is dihydrogen monoxide?"|Question displays to homepage|
|User can click on a specific question to find out more info for specific question | user clicks questions about dihydrogen monoxide| user is sent to specific page for question where more info is displayed|
|User can add new answer to question| user adds answer: "H2O/water"| output: answer displays to specific question page|
|User can edit question| user edits question | app reloads question page with updated information

## Planning

1. Integration
  * Create Questions model
  * Focus on getting questions functionality in place - index page and components to display questions
  * Create question page to display specific question
  * Add CRUD functionality for questions
  * Implement navigation bar at top of all pages
  * Create Answers model
  * Focus on getting answers functionality in place (one-to-many relationship)
  * Add delete functionality for answers

2. UX/UI
  * Style with bootstrap/CSS.

3. Polish
  * Refactor if necessary
  * Update README (if needed)

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
