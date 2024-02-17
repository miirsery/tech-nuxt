export const markText = (repString: string, fullString: string) => {
  const regex = new RegExp(repString, 'gi')

  return fullString.replace(regex, (match) => `<strong>${match}</strong>`)
}
