//@ts-check
import { Question } from "./Question.js";

export class Quiz {
  /**
   *
   * @param {Question[]} questions An array of the question
   */
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  /**
   *
   * @param {string} answer Some text with answer for guess
   */
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }
}
