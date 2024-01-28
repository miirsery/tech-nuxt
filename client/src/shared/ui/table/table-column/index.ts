import {defineComponent, Fragment, h} from "vue";

export default defineComponent({
  name: 'ElTableColumn',
  props: {
    field: {
      type: String,
    },
    label: {
      type: String,
    }
  },
  setup(props, { slots }) {
  },
  render() {
    try {
      const renderDefault = this.$slots.body?.({
        data: {},
      })
      const children = []

      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          children.push(childNode)
        }
        // for (const childNode of renderDefault) {
        //   console.log(childNode)
        //   if (
        //     childNode.type?.name === 'ElTableColumn' ||
        //     childNode.shapeFlag & 2
        //   ) {
        //     children.push(childNode)
        //   } else if (
        //     childNode.type === Fragment &&
        //     Array.isArray(childNode.children)
        //   ) {
        //     childNode.children.forEach((vnode) => {
        //       // No rendering when vnode is dynamic slot or text
        //       if (vnode?.patchFlag !== 1024) {
        //         children.push(vnode)
        //       }
        //     })
        //   }
        // }
      }
      console.log(children)

      return h('div', children)
    } catch {
      return h('div', [])
    }
  },
})
