import { useLayoutEffect } from "react";
import _ from "lodash";
import { deep_load_content } from "../../axios/post";
import { Directory } from "../../@types/article";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { articleSlice, InitArticle } from "../../store/articleSlice";
import "markdown-navbar/dist/navbar.css";
import { directorySlice } from "../../store/directorySlice";
import { CollectionsPanel, pathToCrumbs } from "./CollectionsPanel";
import { IconButton } from "../../@kit/Icon";
import { Left } from "@icon-park/react";
import clsx from "clsx";
import { ArticlePanel } from "./ArticlePanel";
import {Button} from "../../@kit/Button";
import {useNav} from "../../frame/Router";

export const CollectionPage = () => {
  //总体目录结构
  const { rootDirectory, crumbs } = useAppSelector((state) => state.directory);
  const { state, text } = useAppSelector((state) => state.article);
  const dispatch = useAppDispatch();
  const {nav} = useNav()
  /**
   * 初始化，如果store中不存在根目录信息，则向后端发送请求
   */
  useLayoutEffect(() => {
    if (rootDirectory) return;
    deep_refresh();
  }, [rootDirectory, dispatch]);

  const deep_refresh = () => {
    deep_load_content().then((res) => {
      dispatch(directorySlice.actions.setRootDirectory(res.data));
    });
  };

  const DirectoryClick = (item: Directory) => {
    dispatch(
      directorySlice.actions.setCrumbs(
        pathToCrumbs(_.drop(item.path.split("\\")), rootDirectory!),
      ),
    );
    dispatch(articleSlice.actions.toggle(InitArticle));
  };

  return (
      <div className={"collection_page"}>
        <div className="breadcrumb mb-6">
          <IconButton
              click={() =>
                  crumbs.length >= 2 && DirectoryClick(crumbs[crumbs.length - 2])
              }
          >
            <Left theme={"filled"}/>
          </IconButton>
          <div
              className={"crumb"}
              onClick={() => DirectoryClick(rootDirectory!)}
              onContextMenu={deep_refresh}
              children={"wangenius"}
          />
          {_.drop(crumbs).map((crumb, key) => (
              <div
                  className={clsx("crumb", "preSlash")}
                  key={key}
                  onClick={() => DirectoryClick(crumb)}
                  children={crumb?.name}
              />
          ))}
          {text ? <Button cs={"current"} click={()=>{nav("article")}}>
            current reading
          </Button>:""}
        </div>
        <div className={"main_section"}>
          <CollectionsPanel/>
          <ArticlePanel/>
        </div>

      </div>
  );
};
