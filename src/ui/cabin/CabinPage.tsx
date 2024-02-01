import React, { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "markdown-navbar/dist/navbar.css";
import { useCabin } from "../../hook/useCabin";
import { CartonBlock } from "./CartonBlock";

export const CabinPage = () => {
  //总体目录结构
  const { cartons } = useAppSelector((state) => state.cabin);
  const dispatch = useAppDispatch();
  const { renovate } = useCabin();

  /**
   * 初始化，如果store中不存在根目录信息，则向后端发送请求
   */
  useLayoutEffect(() => {
    if (cartons?.length) return;
    renovate();
  }, [cartons, renovate, dispatch]);

  return (
    <div className={"cabin_page"}>
      <div className={"cartons"}>
        {cartons?.map((item, key) => {
          return <CartonBlock item={item} />;
        })}
      </div>
    </div>
  );
};
