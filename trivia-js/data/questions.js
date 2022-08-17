import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data[0].questions.map(
  (obj_question) =>
    new Question(
      obj_question.question,
      obj_question.png,
      obj_question.choices,
      obj_question.answer,
      obj_question.category
    )
);
