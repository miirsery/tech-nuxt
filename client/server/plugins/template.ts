// Hook управления HTML шаблоном приложения
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.body.push('<div class="tooltips-container"></div>')
  })
})
