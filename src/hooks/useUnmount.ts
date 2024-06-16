import { useEffect } from "react";
import useLatest from "./useLatest";

/**
 * 组件销毁时执行
 * @param fn 要执行的函数
 */
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    []
  );
};

export default useUnmount;
