import { host, authHost } from './index.js'

export const getDialogsById = async (id) => {
  const res = await host.get(`api/dialog?id=${id}`)
  console.log('asdfasd :', res)
  return res.data
}
export const createDialog = async (newDialog) => {
  const res = await authHost.post('api/dialog', newDialog)
  return res
}

export const updateDialog = async (newDialog) => {
  const res = await authHost.post('api/dialog/update', newDialog)
  return res
}

export const deleteDialogById = async (dialogId) => {
  const res = await host.delete('api/dialog/' + dialogId)
  return res
}
