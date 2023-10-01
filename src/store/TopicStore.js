import { makeAutoObservable } from 'mobx'

export default class TopicStore {
  constructor() {
    this._topics = []
    makeAutoObservable(this)
  }

  setTopics(topics) {
    this._topics = topics
  }
  deleteTopic(topicId) {
    this._topics = this._topics.filter((topic) => topic.id !== topicId)
  }

  get topics() {
    return this._topics
  }
}
