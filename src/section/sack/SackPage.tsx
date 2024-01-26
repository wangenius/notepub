import React, { useLayoutEffect, useState } from "react";
import { api } from "../../axios/api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { sackSlice } from "../../store/sackSlice";

export function SackPage() {
  const [Sack, setSack] = useState<Sack>();
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  useLayoutEffect(() => {
    api.sack.load().then((res) => {
      setSack(res.data);
    });
  }, []);

  return (
    <div className={"sack_page"}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Sack?.gadgets.map((item, key) => {
              return (
                <div
                  key={key}
                  className="gadget relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                >
                  <div className="relative mx-4 mt-4 h-72 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                      src={item.info.common.url![0]}
                      className="h-full w-full object-cover"
                      alt={""}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {item.name}
                      </p>
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        ¥ {item.info.attachment.price}
                      </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 about">
                      {item.info.common.about}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      disabled={item.info.common.access === false}
                      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={() => {
                        dispatch(sackSlice.actions.setGadget(item));

                        nav(`../gadget?path=${item.path}`);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
