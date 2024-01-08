import { useEffectOnce } from "react-use";
import { useCallback, useState } from "react";

export function useWindows() {
  const docs = document.documentElement;
  const [size, setSize] = useState({
    width: docs.clientWidth,
    height: docs.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: docs.clientWidth,
      height: docs.clientHeight,
    });
  }, []);

  useEffectOnce(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return {
    /** @Description client size is or isn't > 900 */
    size: size,
  };
}
