import React, { useEffect, useState } from "react";
import { api } from "../../axios/collection";
import log = api.log;

interface knot {
  user: string;
  time: number;
  title: string;
  content: string;
}

export const Timeline = () => {
  const [timeLine, setTimeLine] = useState<knot[]>([]);

  useEffect(() => {
    log.timeline().then((res) => {
      setTimeLine((res.data as { knot: [] }).knot.reverse().slice(0, 5));
    });
  }, []);

  return (
    <div className={"timeline"}>
      <h2 className={"title"}>Timeline</h2>
      <div>
        {timeLine?.map((item, key) => {
          return (
            <div className="flex gap-x-3">
              <div className="w-16 text-end">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {item.time.toString().slice(4, 6) +
                    "." +
                    item.time.toString().slice(6, 8)}
                </span>
              </div>

              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.content}
                </p>
                <button
                  type="button"
                  className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span className="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                    {item.user[0]}
                  </span>
                  {item.user}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
