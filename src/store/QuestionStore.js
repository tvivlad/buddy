import { makeAutoObservable } from 'mobx'

export default class QuestionStore {
  constructor() {
    this._questions = []
    makeAutoObservable(this)
  }
  setQuestions(questions) {
    this._questions = questions
  }
  deleteQuestion(questionId) {
    this._questions = this._questions.filter(
      (question) => question.id !== questionId
    )
  }
  get questions() {
    return this._questions
  }
}
