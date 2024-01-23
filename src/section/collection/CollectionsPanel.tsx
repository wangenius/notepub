import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Collection } from "../../@types/sheet";
import { collectionSlice } from "../../store/collectionSlice";
import _ from "lodash";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { useNavigate } from "react-router-dom";
import { colors } from "../../@const/const";

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

export function CollectionsPanel() {
  const { collections, current } = useAppSelector((state) => state.collection);
  const dispatch = useAppDispatch();
  console.log(collections, current);

  const nav = useNavigate();
  const CollectionEnter = (item: Collection) => {
    dispatch(collectionSlice.actions.setCurrent(item));

    nav("../sheet/" + item.name);
  };

  return (
    <div className="collections">
      <div>
        <div className="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
          <h2 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug !mb-2 text-primary">
            不要紧，山野都有雾灯
          </h2>
        </div>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit !mb-4 !font-normal !text-gray-600">
          Framework-specific guides that cover our recommended approach to
          installing @material-tailwind/react in a number of popular
          environments. Select your preferred framework from the list below and
          follow the instructions.
        </p>
        <div
          className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4"
          id="frameworks-integration"
        >
          {collections?.map((item, key) => {
            return (
              <div
                key={key}
                style={{
                  backgroundColor:
                    colors[
                      item.name.toUpperCase().charCodeAt(0) ** 2 % colors.length
                    ] + "66",
                }}
                className="collection_btn"
                onClick={() => CollectionEnter(item)}
              >
                <div className="text-3xl">{item.name}</div>

                <div className={"description"}>
                  {item.info?.common?.description}
                </div>
                <div className="tags">
                  {item.info?.common?.tags?.map((item, key) => (
                    <span className={"tag"} key={key} children={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
