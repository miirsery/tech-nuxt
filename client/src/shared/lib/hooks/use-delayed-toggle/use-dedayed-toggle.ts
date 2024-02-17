import {useTimeout} from "#shared/lib/hooks/use-timeout";
import {unref} from "vue";

type useDelayedToggleProps = {
  showAfter?: number
  hideAfter?: number
  autoClose?: boolean
}

export type UseDelayedToggleProps = {
  open: (event?: Event) => void
  close: (event?: Event) => void
} & useDelayedToggleProps

export const useDelayedToggle = ({
                                   showAfter,
                                   hideAfter,
                                   autoClose,
                                   open,
                                   close,
                                 }: UseDelayedToggleProps) => {
  const { registerTimeout } = useTimeout()
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose,
  } = useTimeout()

  const onOpen = (event?: Event) => {
    registerTimeout(() => {
      open(event)

      const _autoClose = unref(autoClose)
      if (typeof _autoClose === 'number' && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event)
        }, _autoClose)
      }
    }, unref(showAfter))
  }

  const onClose = (event?: Event) => {
    cancelTimeoutForAutoClose()

    registerTimeout(() => {
      close(event)
    }, unref(hideAfter))
  }

  return {
    onOpen,
    onClose,
  }
}
