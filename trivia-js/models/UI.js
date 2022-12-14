import { Config } from "./Config.js";

export class UI {
  /**
   *
   * @param {Config} config config as path..
   */
  constructor(path) {
    this.path = path;
  }

  /**
   *
   * @param {string} text question text to render
   */

  showQuestion(text, screenshot) {
    const title = document.getElementById("title");
    title.innerHTML = "Tecnología";
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
    if (screenshot != "") {
      const screenShoot = document.getElementById("screenshoot");
      screenShoot.innerHTML = `<img src="${this.path + screenshot}" />`;
    }
  }

  /**
   *
   * @param {string[]} choices the choices of the question
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    let dFrag = document.createDocumentFragment();
    for (let i = 0; i < choices.length; i++) {
      const btn = document.createElement("button");
      const text = document.createTextNode(choices[i]);
      btn.appendChild(text);
      btn.className = "button";
      btn.addEventListener("click", () => {
        callback(choices[i]);
      });
      dFrag.appendChild(btn);
    }
    choicesContainer.appendChild(dFrag);
  }
  /**
   *
   * @param {number} score the total score
   */
  showScores(score) {
    const quizEndHTML = `
      <h1>Resultado</h1>
      <h2>Puntaje total: ${score}</h2>
    `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }
  /**
   *
   * @param {number} currentIndex the current index of the question
   * @param {number} total the total questions
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
  }
}
