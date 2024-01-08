import * as React from "react";
import { memo, ReactNode, useLayoutEffect, useRef, useState } from "react";

export interface LocateConfigs {
  /** @Description 锚元素 鼠标事件和锚元素必须设置一个 */
  anchorItem?: HTMLDivElement | null;
  /** @Description 鼠标事件 */
  mouseEvent?: React.MouseEvent;
  /** @Description 水平停靠位置线 */
  level: "nextLeft" | "nextRight" | "alignedLeft";
  /** @Description 垂直停靠位置线 */
  vertical: "overTop" | "belowBottom" | "alignedTop" | "alignedBottom";
}

export interface LocalizerProps {
  children: ReactNode;
  anchorItem: HTMLDivElement | null;
  configs?: LocateConfigs;
  cs?: string;
}

/** @Description 位置定位器 对于视窗而言 */
export const Localizer = memo(
  ({ children, anchorItem, cs }: LocalizerProps) => {
    const [loc, setLoc] = useState<{ x: number; y: number }>({
      x: 0,
      y: 0,
    });
    const ref = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
      /* 利用锚点元素设置位置*/
      anchorLocation(anchorItem!);
    }, [anchorItem]);


    /** @Description 锚点定位方法 */
    const anchorLocation = (anchor: HTMLElement) =>
      setLoc({
        x: anchor.getBoundingClientRect().x,
        y: anchor.getBoundingClientRect().y + anchor.clientHeight,
      });

    return (
      <div
        ref={ref}
        style={{
          overflow: "visible",
          position: "absolute",
          top: loc.y,
          left: loc.x,
        }}
        className={cs}
        children={children}
      />
    );
  },
);
