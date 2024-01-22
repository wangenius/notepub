import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Collection } from "../../@types/sheet";
import { collectionSlice } from "../../store/collectionSlice";
import _ from "lodash";
import { Icons } from "../../@kit/Icon";
import Scrollbar from "react-smooth-scrollbar";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { Drag } from "@icon-park/react";
import { ListItem } from "@material-tailwind/react";
import { api } from "../../axios/collection";

OverscrollPlugin.defaultOptions.maxOverscroll = 3000;

SmoothScrollbar.use(OverscrollPlugin);
export const pathToCrumbs = (
  paths: string[],
  directory: Collection,
): Collection[] => {
  let res: Collection[] = [];
  if (paths.length > 0)
    res = pathToCrumbs(
      _.drop(paths),
      _.find(directory?.sub, ["name", paths[0]])!,
    );
  return _.concat(directory, res);
};

export function CollectionBar() {
  const { collections, current } = useAppSelector((state) => state.collection);
  const dispatch = useAppDispatch();
  console.log(collections, current);

  const CollectionEnter = (item: Collection) => {
    dispatch(collectionSlice.actions.setCurrent(item));
  };
  return (
    <div className="collection_bar">
      <h2
        className={"title"}
        onClick={() => {
          api.collection.renovate().then((res) => {
            console.log(res.data);
            dispatch(
              collectionSlice.actions.setCollections(
                (res.data as Collection).sub,
              ),
            );
          });
        }}
      >
        Collection
      </h2>
      <Scrollbar
        damping={30000}
        thumbMinSize={2000}
        renderByPixels={false}
        alwaysShowTracks={false}
        continuousScrolling
        plugins={OverscrollPlugin}
        className={"collection_list"}
        onScroll={() => {}}
      >
        {collections?.map((item, key) => {
          return (
            <ListItem
              onClick={() => CollectionEnter(item)}
              className="collection_btn"
              placeholder={undefined}
            >
              <Icons.Box />
              <p className={"collection_name"}>{item.name}</p>
              <Drag className={"right_icon"} />
            </ListItem>
          );
        })}
      </Scrollbar>
    </div>
  );
}
