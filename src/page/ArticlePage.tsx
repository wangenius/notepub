import { useLayoutEffect } from "react";
import { instance } from "../axios/axios";
import { ApplicationTwo, Left } from "@icon-park/react";
import _ from "lodash";
import { IconButton } from "../@kit/Icon";
import { deep_load_content } from "../axios/post";
import clsx from "clsx";
import { ArticleFile, Directory } from "../@types/article";
import { useAppDispatch, useAppSelector } from "../store/store";
import { articleSlice, InitArticle } from "../store/articleSlice";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { a, code } from "./TextBody";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { directorySlice } from "../store/directorySlice";
import { colors } from "../@const/const";

export const ArticlePage = () => {
  //总体目录结构
  const { state, text } = useAppSelector((state) => state.article);
  const { rootDirectory, crumbs } = useAppSelector((state) => state.directory);
  const dispatch = useAppDispatch();
  /**
   * 初始化，如果store中不存在根目录信息，则向后端发送请求
   */
  useLayoutEffect(() => {
    if (rootDirectory) return;
    deep_load_content().then((res) => {
      dispatch(directorySlice.actions.setRootDirectory(res.data));
    });
  }, [rootDirectory, dispatch]);

  const pathToCrumbs = (paths: string[], directory: Directory): Directory[] => {
    let res: Directory[] = [];
    if (paths.length > 0)
      res = pathToCrumbs(
        _.drop(paths),
        _.find(directory.subdirectories, ["name", paths[0]])!,
      );
    return _.concat(directory, res);
  };

  const DirectoryClick = (item: Directory) => {
    dispatch(
      directorySlice.actions.setCrumbs(
        pathToCrumbs(_.drop(item.path.split("\\")), rootDirectory!),
      ),
    );
    dispatch(articleSlice.actions.toggle(InitArticle));
  };

  /**
   * article打开点击
   * @param item 文件
   * @constructor
   */
  const article_open = (item: ArticleFile) => {
    instance.post("/api/article/get_main_body", item.path).then((res) => {
      dispatch(articleSlice.actions.toggle({ state: true, text: res.data }));
    });
  };

  return (
    <div className={"article"}>
      <div className="breadcrumb">
        <IconButton
          click={() => {
            DirectoryClick(rootDirectory!);
          }}
        >
          <ApplicationTwo />
        </IconButton>
        <IconButton
          click={() => {
            if (crumbs.length >= 2) DirectoryClick(crumbs[crumbs.length - 2]);
          }}
        >
          <Left theme={"filled"} />
        </IconButton>
        {_.drop(crumbs).map((crumb, key1) => (
          <div
            className={clsx("crumb", key1 && "preSlash")}
            key={key1}
            onClick={() => {
              DirectoryClick(crumb);
            }}
            children={crumb?.name}
          />
        ))}
        <div style={{ flex: 1 }} />
      </div>
      <div className={"main"}>
        {state ? (
          <>
            <div className={"body"}>
              <Markdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  code: code,
                  a: a,
                }}
              >
                {text}
              </Markdown>
            </div>
            <div className="navigation">
              <MarkdownNavbar
                ordered={false}
                headingTopOffset={40}
                source={text}
              />
            </div>
          </>
        ) : (
          <div className={"content_Box"}>
            <div className={"directory_list"}>
              {crumbs[crumbs.length - 1]?.subdirectories?.map((item, key) => {
                return (
                  <div
                    className={"content_item"}
                    onClick={() => DirectoryClick(item)}
                    key={key}
                    style={{
                      backgroundColor:
                        colors[
                          item.name.toUpperCase().charCodeAt(0) ** 2 %
                            colors.length
                        ] + "66",
                    }}
                  >
                    <div className={"name"}>{item.name}</div>
                    <div className={"info"}>{item.files.length} documents,{item.subdirectories.length} subdirectories</div>
                  </div>
                );
              })}
            </div>
            <div className="articleFilesList">
              {crumbs[crumbs.length - 1]?.files?.map((item, key) => {
                return (
                  <div
                    className={"article_item"}
                    onClick={() => article_open(item)}
                    key={key}
                  >
                    <div className="name">
                      {item.name.slice(0, item.name.length - 3)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
