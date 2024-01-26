import React, { useCallback, useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "markdown-navbar/dist/navbar.css";
import { cabinSlice } from "../../store/cabinSlice";
import { api } from "../../axios/api";
import { colors } from "../../@const/const";
import { useNavigate } from "react-router-dom";
import { Carton } from "../../@types/sheet";

export const CabinPage = () => {
  //总体目录结构
  const { cartons } = useAppSelector((state) => state.cabin);
  const dispatch = useAppDispatch();

  const deep_refresh = useCallback(() => {
    api.cabin.renovate().then((res) => {
      dispatch(cabinSlice.actions.setCartons((res.data as any).cartons));
    });
  }, [dispatch]);

  /**
   * 初始化，如果store中不存在根目录信息，则向后端发送请求
   */
  useLayoutEffect(() => {
    if (cartons) return;
    deep_refresh();
  }, [cartons, deep_refresh, dispatch]);

  const nav = useNavigate();
  const CollectionEnter = (item: Carton) => {
    dispatch(cabinSlice.actions.setCurrent(item));
    nav("../cabin/" + item.name);
  };

  return (
    <div className={"collection_page"}>
      <div className="collections">
        <h2 className="title">不要紧，山野都有雾灯</h2>
        <p className="text-gray-600 indent-8">
          从何时开始忌讳空山无人，从何时开始怕遥望星辰，原来神仙鱼横渡大海会断魂，听不到世人爱听的福音。曾迷途才怕追不上满街赶路人，无人理睬如何求生，顽童大了没那么笨，可以聚脚于康庄旅途然后同沐浴温泉，
          为何在赤地上独行...
        </p>
        <div className="grid_layout">
          {cartons?.map((item, key) => {
            return (
              <div
                key={key}
                style={{
                  backgroundColor:
                    colors[
                      item.name
                        .toUpperCase()
                        .charCodeAt(item.name.length / 2) **
                        2 %
                        colors.length
                    ] + "12",
                }}
                className="collection_btn card-container"
                onClick={() => CollectionEnter(item)}
              >
                <div
                  className="name"
                  style={{
                    color:
                      colors[
                        item.name
                          .toUpperCase()
                          .charCodeAt(item.name.length / 2) **
                          2 %
                          colors.length
                      ],
                  }}
                >
                  {item.name}
                </div>
                <div className="content">
                  <div className="tags">
                    {item.info?.common?.tags?.map((it, key) => (
                      <span
                        style={{
                          backgroundColor:
                            colors[
                              item.name
                                .toUpperCase()
                                .charCodeAt(item.name.length / 2) **
                                2 %
                                colors.length
                            ],
                        }}
                        className={"tag"}
                        key={key}
                        children={it}
                      />
                    ))}
                  </div>
                  <div className={"description"}>
                    {item.info?.common?.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
