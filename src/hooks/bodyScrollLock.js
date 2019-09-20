import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Can also do this
    // return function cleanup() {
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}

export { useBodyScrollLock };