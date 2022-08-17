import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(
  (obj_question) =>
    new Question(
      obj_question.question,
      obj_question.choices,
      obj_question.answer
    )
);
