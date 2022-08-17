export class Question {
  /**
   *
   * @param {string} text 'This is a questions'
   * @param {string[]} choices 'This are the choices of the question'
   * @param {string} answer 'This is answer os the question'
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  /**
   *
   * @param {string} choice 'some text to guess'
   * @returns {boolean} 'return true if the answer is correct'
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}
