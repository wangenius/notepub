import { Sheet } from "../../@types/sheet";
import { instance } from "../../axios/axios";
import { sheetSlice } from "../../store/sheetSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "@material-tailwind/react";
import { useNav } from "../../frame/Router";

export const CollectionAbstract = () => {
  const dispatch = useAppDispatch();
  const { nav } = useNav();
  const { current } = useAppSelector((state) => state.collection);

  /**
   * article打开点击
   * @param item 文件
   * @constructor
   */
  const sheet_open = (item: Sheet) => {
    instance.post("/api/article/get_main_body", item.path).then((res) => {
      dispatch(sheetSlice.actions.toggle({ state: true, text: res.data }));
    });
    nav("article");
  };
  return (
    <div className={"collection_abstract"}>
      <h2 className="title">{current?.name}</h2>

      <div className="mt-6 border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">tag</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {current?.info?.common?.tags?.map((item, key) => (
                <span className={"mr-2.5"}>{item}</span>
              ))}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              created time
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {current?.time.create}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              modified time
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {current?.time.modify}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {current?.info?.common?.description}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              content
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {current?.sub.map((item, key) => {
                return <li>{item.name}</li>;
              })}
            </dd>
          </div>
        </dl>
      </div>
      <div className={"btn_group"}>
        <Button placeholder={""} className={"text-sm mb-2"} fullWidth>
          {"开始阅读"}
        </Button>
        <Button
          placeholder={""}
          className={`text-sm border bg-[${`#e3e3e3`}] text-[${`#131313`}]`}
          fullWidth
        >
          {"share"}
        </Button>
      </div>
    </div>
  );
};
