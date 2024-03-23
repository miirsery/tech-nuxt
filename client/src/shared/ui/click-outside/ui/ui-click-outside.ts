import {defineComponent, h, ref} from "vue";

export const OnClickOutside = /* #__PURE__ */ defineComponent({
  name: 'OnClickOutside',
  props: ['as', 'options'] as unknown as undefined,
  emits: ['trigger'],
  setup(props, { slots, emit }) {
    const target = ref()
    onClickOutside(target, (e) => {
      emit('trigger', e)
    })

    return () => {
      if (slots.default)
        return h(props.as || 'div', { ref: target }, slots.default())
    }
  },
})
