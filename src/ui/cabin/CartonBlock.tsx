import { colors } from "../../@const/const";
import React, { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import { useCarton } from "../../hook/useCarton";

export const CartonBlock = ({ item }: { item: Carton }) => {
  const { open } = useCarton(item);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const backImg = {
    backgroundImage: `url(${item.info?.common?.cover})`,
    backgroundPosition: "center",
  };

  const backColor = {
    backgroundColor:
      colors[
        item.name.toUpperCase().charCodeAt(item.name.length / 2) ** 2 %
          colors.length
      ] + "12",
  };

  return (
    <div ref={containerRef} style={backColor} className="carton" onClick={open}>
      {item.info?.common?.cover ? (
        <div style={backImg} className={"back"} />
      ) : null}
      <div className="tags">
        {item.info?.common?.tags?.map((it, key) => (
          <div className={"tag"} key={key} children={it} />
        ))}
      </div>
      <div className="content">
        <div className={"description"}>{item.info?.common?.description}</div>
        <div ref={textRef} className="name">
          {item.name}
        </div>
      </div>
    </div>
  );
};
