export const useRafThrottle = (fn: { apply: (arg0: null, arg1: any[]) => void; }) => {
  let rafId: number | null = null;

  const throttledFn = (...args: any[]) => {
    if (typeof rafId === 'number') return

    rafId = requestAnimationFrame(() => {
      fn.apply(null, args)

      rafId = null;
    });
  };

  throttledFn.cancel = () => {
    if (typeof rafId !== 'number') return

    cancelAnimationFrame(rafId);
  };

  return throttledFn;
};
