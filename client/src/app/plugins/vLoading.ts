import {defineNuxtPlugin} from "#app";
import type {DirectiveBinding} from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('loading', {
    mounted(el: HTMLElement, binding) {
      bindingLoader(el, binding)
    }
  })
})

const initLoader = () => {
  // ...
}

const bindingLoader = (el: HTMLElement, binding: DirectiveBinding) => {
  const loader = initLoader()
}
