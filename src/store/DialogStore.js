import { makeAutoObservable } from 'mobx'

export default class DialogStore {
  constructor() {
    this._dialogs = []
    this._selectedDialog = {}

    makeAutoObservable(this)
  }

  setDialogs(dialogs) {
    this._dialogs = dialogs
  }
  setSelectedDialog(dialog) {
    this._selectedDialog = dialog
  }
  deleteDialog(dialogId) {
    this._dialogs = this._dialogs.filter((dialog) => dialog.id !== dialogId)
  }
  get dialogs() {
    return this._dialogs
  }
  get selectedDialog() {
    return this._selectedDialog
  }
}
