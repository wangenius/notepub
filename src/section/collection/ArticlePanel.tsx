import { ArticleFile } from "../../@types/article";
import { instance } from "../../axios/axios";
import { articleSlice } from "../../store/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { List, ListItem } from "@material-tailwind/react";
import {Icons} from "../../@kit/Icon";
import File = Icons.File;
import {useNav} from "../../frame/Router";

export const ArticlePanel = () => {
  const dispatch = useAppDispatch();
  const {nav} = useNav();
  const { crumbs } = useAppSelector((state) => state.directory);
  /**
   * article打开点击
   * @param item 文件
   * @constructor
   */
  const article_open = (item: ArticleFile) => {
    instance.post("/api/article/get_main_body", item.path).then((res) => {
      dispatch(articleSlice.actions.toggle({ state: true, text: res.data }));
    });
    nav("article")
  };
  return (
    <List placeholder={""} className={"article_panel"}>
      {crumbs[crumbs.length - 1]?.files.map((item, key) => {
        return (
          <ListItem className={"h-16"} placeholder={""} onClick={()=>article_open(item)} key={key}>
            <File/>
            {item.name.slice(0,item.name.length - 3)}
          </ListItem>
        );
      })}
    </List>
  );
};
