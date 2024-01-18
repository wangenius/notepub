import React from "react";
import {
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Directory } from "../../@types/article";
import { Icons } from "../../@kit/Icon";
import { directorySlice } from "../../store/directorySlice";
import _ from "lodash";
import { articleSlice, InitArticle } from "../../store/articleSlice";

export const pathToCrumbs = (
  paths: string[],
  directory: Directory,
): Directory[] => {
  let res: Directory[] = [];
  if (paths.length > 0)
    res = pathToCrumbs(
      _.drop(paths),
      _.find(directory.subdirectories, ["name", paths[0]])!,
    );
  return _.concat(directory, res);
};

export function CollectionsPanel() {
  const { rootDirectory, crumbs } = useAppSelector((state) => state.directory);
  const dispatch = useAppDispatch();

  const DirectoryClick = (item: Directory) => {
    dispatch(
      directorySlice.actions.setCrumbs(
        pathToCrumbs(_.drop(item.path.split("\\")), rootDirectory!),
      ),
    );
    dispatch(articleSlice.actions.toggle(InitArticle));
  };
  return (
    <div className="collection_package">
      {crumbs[crumbs.length - 1]?.subdirectories.length ? (
        <List placeholder={""} className={"list"}>
          {crumbs[crumbs.length - 1]?.subdirectories.map((item, key) => {
            return (
              <ListItem
                placeholder={""}
                key={key}
                className="collection_list_item"
                onClick={() => DirectoryClick(item)}
              >
                <ListItemPrefix placeholder={undefined}>
                  <Icons.Box />
                </ListItemPrefix>
                <Typography
                  placeholder={""}
                  color="blue-gray"
                  className="collection_name"
                >
                  {item.name}
                </Typography>
                <ListItemSuffix placeholder={""}>
                  <Chip
                    value={item.files.length + item.subdirectories.length}
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            );
          })}{" "}
        </List>
      ) : (
        <div className={"empty_list"}>
          <img
            alt={""}
            className={"w-48 m-auto mt-12"}
            src={"/asset/nothing.svg"}
          />
          <div
            className={"m-auto w-fit text-blue-gray-200 mb-12 font-sans"}
            style={{ letterSpacing: 1 }}
          >
            empty
          </div>
        </div>
      )}
    </div>
  );
}
