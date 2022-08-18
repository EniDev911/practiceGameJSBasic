//@ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { Config } from "./models/Config.js";

/**
 *
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui the main ui object
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    console.log(quiz.score);
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(
      quiz.getQuestionIndex().text,
      quiz.getQuestionIndex().screenshot
    );
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
  }
};

function main() {
  const quiz = new Quiz(questions);
  const config = new Config();
  const ui = new UI(config.getImagePath(quiz.getQuestionIndex().category));
  renderPage(quiz, ui);
  window.addEventListener("load", () => {
    document.body.className = "loaded";
  });
}
main();
