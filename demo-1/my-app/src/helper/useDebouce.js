import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(cb, delay, dependency) {
  const { reset, clear } = useTimeout(cb, delay);
  useEffect(reset, [...dependency]);
  useEffect(clear, []);
}