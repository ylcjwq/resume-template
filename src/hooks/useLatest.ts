import { useRef } from "react";

/**
 * 永远返回最新的值，可以避免闭包问题。
 * @param value 需要ref包裹的值
 */
const useLatest = <T>(value: T): { readonly current: T } => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
