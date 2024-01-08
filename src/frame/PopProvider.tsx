import React, { memo, ReactNode, useEffect, useState } from "react";
import { EventHandler, PopEventEmit } from "./event";
import ClickAwayListener from "react-click-away-listener";
import { Localizer } from "../@kit/Localizer";

interface infuseConfig {
  group_id: string | number;
  event: "click" | "enter";
}

/** @Description Pop Container */
const PopContainer = memo(() => {
  /** @Description content */
  const [content, setContent] = useState<ReactNode>(null);
  /** @Description 状态 */
  const [exist, setExist] = useState<boolean>(false);

  const [currentGroupId, setCurrentGroupId] = useState<string | number>(0);


  /** @Description init */
  useEffect(() => {
    /** @Description setPop */
    const infuse = (content: ReactNode, infuseConfig: infuseConfig) => {
      if (
        infuseConfig.event === "enter" &&
        infuseConfig.group_id !== currentGroupId
      )
        return;
      setContent(content);
      setCurrentGroupId(infuseConfig.group_id!);
    };
    PopEvent.on(PopEventEmit.Content, infuse)
      .on(PopEventEmit.Close, close)
      .on(PopEventEmit.Open, open);
  }, [currentGroupId]);

  /** @Description 打开pop */
  const open = () => setExist(true);
  /** @Description 关闭pop */
  const close = () => setExist(false);

  if (!exist) return null;
  return (
    <ClickAwayListener onClickAway={close}>
      <div className={"Pop"}>{content}</div>
    </ClickAwayListener>
  );
});

/** @Description 事件管理器 */
const PopEvent = new EventHandler<PopEventEmit>();

abstract class pop {
  /**
   * 将需要显示的内容，注入PopContainer容器中，结合this.open使用
   * @param content 需要显示的内容
   * @param anchorItem 锚点物体
   * @param configs
   */
  static infuse(
    content: ReactNode,
    anchorItem: HTMLDivElement | null,
    configs: infuseConfig,
  ) {
    PopEvent.emit(
      PopEventEmit.Content,
      <Localizer anchorItem={anchorItem} children={content} />,
      configs,
    );
    return this;
  }

  static open() {
    PopEvent.emit(PopEventEmit.Open);
  }
  static close() {
    PopEvent.emit(PopEventEmit.Close);
  }
}

export { PopContainer, pop };
