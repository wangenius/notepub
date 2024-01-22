import React, { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "markdown-navbar/dist/navbar.css";
import { collectionSlice } from "../../store/collectionSlice";
import { CollectionBar } from "./CollectionBar";
import { CollectionAbstract } from "./CollectionAbstract";
import { useNav } from "../../frame/Router";
import { api } from "../../axios/collection";
import { Collection } from "../../@types/sheet";

export const CollectionPage = () => {
  //总体目录结构
  const { collections } = useAppSelector((state) => state.collection);
  const { state, text } = useAppSelector((state) => state.sheet);
  const dispatch = useAppDispatch();
  const { nav } = useNav();
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
      <CollectionBar />
      <CollectionAbstract />
      <div className={"subCollectionBar"}>
        <h2 className={"title"}>Timeline</h2>

        <div>
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              1 Aug, 2023
            </h3>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Created "Preline in React" task
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Find more detailed insctructions here.
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img
                  className="flex-shrink-0 w-4 h-4 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Image Description"
                />
                James Collins
              </button>
            </div>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Release v5.2.0 quick bug fix 🐞
              </h3>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <span className="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                  A
                </span>
                Alex Gregarov
              </button>
            </div>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Marked "Install Charts" completed
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Finally! You can check it out here.
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img
                  className="flex-shrink-0 w-4 h-4 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Image Description"
                />
                James Collins
              </button>
            </div>
          </div>

          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              31 Jul, 2023
            </h3>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Take a break ⛳️
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Just chill for now... 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
