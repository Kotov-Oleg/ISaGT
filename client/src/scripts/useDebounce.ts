import {useCallback, useRef} from 'react';

export default function useDebounce<TCallback extends (...args: any[]) => void>(
  callback: TCallback,
  delay: number
): (...args: Parameters<TCallback>) => void {
  const timer = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<TCallback>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};