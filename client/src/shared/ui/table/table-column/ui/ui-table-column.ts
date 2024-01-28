import {defineComponent, Fragment, h} from "vue";

export default defineComponent({
  name: 'UiTableColumn',
  props: {
    field: {
      type: String,
    },
    label: {
      type: String,
    }
  },
  setup(props, { slots }) {
    return
  },
  render() {
    try {
      const renderDefault = this.$slots.default?.({ data: {} }) // передаем данные строки в шаблон
      const children = []

      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          children.push(childNode)
        }
      }
      console.log(children)

      return h('div', children)
    } catch {
      return h('div', [])
    }
  },
});
