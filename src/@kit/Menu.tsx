import { forwardRef, ReactNode, useRef } from "react";
import { LocateConfigs } from "./Localizer";
import clsx from "clsx";
import { pop } from "../frame/PopProvider";

interface MenuItemProps {
  /** @description 面板内容*/
  content: ReactNode;
  /** @description 开关ItemRef*/
  toggle: ReactNode;
  /** @description 定位参数*/
  config?: LocateConfigs;
  /**
   * classname
   */
  cs?: string;
  group_id: string | number;
  disable?: boolean;
}

/**
 * 菜单组件
 * @property content 浮动内容
 * @property toggle 触发内容
 * @property group_id 组id，同一组之间的触发器可以不点击直接修改浮动内容
 */
export const Menu = forwardRef(
  (
    { content, toggle, cs, group_id = 0, disable = false }: MenuItemProps,
    ref,
  ) => {
    const Ref = useRef<HTMLDivElement>(null);
    return (
      <div
        className={cs}
        onClick={() =>
          !disable &&
          pop
            .infuse(content, Ref.current, {
              group_id: group_id,
              event: "click",
            })
            .open()
        }
        onMouseEnter={() => {
          !disable &&
            pop.infuse(content, Ref.current, {
              group_id: group_id,
              event: "enter",
            });
        }}
        ref={Ref}
      >
        {toggle}
      </div>
    );
  },
);
