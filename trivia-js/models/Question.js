export class Question {
  /**
   *
   * @param {string} text 'This is a questions'
   * @param {string} screenshot 'This is a screenshoot URL (Optional)'
   * @param {string[]} choices 'This are the choices of the question'
   * @param {string} answer 'This is answer os the question'
   */
  constructor(text, screenshot, choices, answer, category) {
    this.text = text;
    this.screenshot = screenshot;
    this.choices = choices;
    this.answer = answer;
    this.category = category;
  }

  /**
   *
   * @param {string} choice some text to an answer
   * @returns
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}
