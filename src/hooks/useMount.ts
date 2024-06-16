import { useEffect } from "react";

/**
 * 组件挂载时执行
 * @param fn 要执行的函数
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
