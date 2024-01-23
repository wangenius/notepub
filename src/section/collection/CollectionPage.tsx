import React, { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "markdown-navbar/dist/navbar.css";
import { collectionSlice } from "../../store/collectionSlice";
import { CollectionsPanel } from "./CollectionsPanel";
import { api } from "../../axios/collection";
import { Collection } from "../../@types/sheet";

export const CollectionPage = () => {
  //总体目录结构
  const { collections } = useAppSelector((state) => state.collection);
  const dispatch = useAppDispatch();
  /**
   * 初始化，如果store中不存在根目录信息，则向后端发送请求
   */
  useLayoutEffect(() => {
    if (collections) return;
    deep_refresh();
  }, [collections, dispatch]);

  const deep_refresh = () => {
    api.collection.renovate().then((res) => {
      console.log(res.data);
      dispatch(
        collectionSlice.actions.setCollections((res.data as Collection).sub),
      );
    });
  };

  return (
    <div className={"collection_page"}>
      <CollectionsPanel />
      {/*<Timeline />*/}
    </div>
  );
};
