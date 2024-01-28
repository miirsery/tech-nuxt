export type FetchStatusType = {
  status?: 'error' | 'success'
  text?: string
  description?: string
}

export type FetchStatusDialogType = {
  visible: boolean
  state: FetchStatusType
}
