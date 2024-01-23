import { useAppSelector } from "../../store/store";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export const CollectionAbstract = () => {
  const { current } = useAppSelector((state) => state.collection);
  const nav = useNavigate();

  /**
   * article打开点击
   * @constructor
   */
  const toRead = () => {
    nav("../sheet/" + current?.name);
  };

  return (
    <div className={"collection_abstract"}>
      <div className="border-gray-100">
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
              {current?.time.create.substring(0, 10).replaceAll("-", ".") +
                " " +
                current?.time.create.substring(11, 19)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              modified time
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {current?.time.modify.substring(0, 10).replaceAll("-", ".") +
                " " +
                current?.time.modify.substring(11, 19)}
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
        </dl>
      </div>
      <div className={"btn_group"}>
        <Button
          placeholder={""}
          className={"text-sm mb-2"}
          onClick={toRead}
          fullWidth
        >
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
