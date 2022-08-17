import { useRef, useEffect, useCallback } from "react";

export default function useTimeout(callback, delay) {
  // to avoid re-generating the callback at initial component
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  // save new callback if it changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback])

  // set a callback function in timeout
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay])

  // clear callback funcition 
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [])

  useEffect(() => {
    set()
    return clear;
  }, [delay, set, clear]);
  
  // first clear the tiemout and set in the time out and run clalback
  const reset = useCallback(() => {
    clear();
    set();
  }, [set, clear]);

  return { reset, clear }
}