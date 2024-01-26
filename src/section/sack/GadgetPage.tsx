import { PaperClipIcon } from "@heroicons/react/16/solid";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { code, p } from "../sheet/SheetBody";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeKatex from "rehype-katex";
import ReactMarkdown from "react-markdown";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { sackSlice } from "../../store/sackSlice";
import { api } from "../../axios/api";
import { useLocation } from "react-router-dom";

export default function GadgetPage() {
  const { doc, gadget } = useAppSelector((state) => state.sack);
  const loc = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    api.sack
      .gadget(loc.search.substring(6, loc.search.length) + "/index.md")
      .then((res) => {
        dispatch(sackSlice.actions.setText(res.data));
      });
  }, [dispatch, loc.search]);

  return (
    <div className={"gadget_page"}>
      <h3 className="title">{gadget?.name}</h3>
      <p className="description">{gadget?.info.common.tags}</p>

      <Tabs value="dashboard">
        <TabsHeader className={"mt-5"} placeholder={undefined}>
          <Tab value={"dashboard"} placeholder={undefined}>
            <div className="flex items-center gap-2">Dashboard</div>
          </Tab>
          <Tab value={"document"} placeholder={undefined}>
            <div className="flex items-center gap-2">Document</div>
          </Tab>
        </TabsHeader>
        <TabsBody placeholder={undefined}>
          <TabPanel value={"dashboard"}>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    author
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    wangenius
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    price
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    ¥ {gadget?.info.attachment.price}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    About
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {gadget?.info.common.about}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Attachments
                  </dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {gadget?.info.attachment.url ? (
                      <a
                        className={
                          "text-indigo-600 underline-offset-4 underline hover:bg-blue-100"
                        }
                        onClick={() => {
                          window.open(gadget?.info.attachment.url as string);
                        }}
                      >
                        外置下载链接
                      </a>
                    ) : (
                      <ul
                        role="list"
                        className="divide-y divide-gray-100 rounded-md border border-gray-200"
                      >
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <span className="truncate font-medium">
                                resume_back_end_developer.pdf
                              </span>
                              <span className="flex-shrink-0 text-gray-400">
                                2.4mb
                              </span>
                            </div>
                          </div>

                          <div className="ml-4 flex-shrink-0">
                            <button
                              onClick={() => {}}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Download
                            </button>
                          </div>
                        </li>
                      </ul>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </TabPanel>
          <TabPanel value={"document"}>
            <ReactMarkdown
              className={"markdown"}
              remarkPlugins={[remarkGfm, remarkMath, remarkRehype, remarkParse]}
              rehypePlugins={[rehypeKatex]}
              components={{
                code: code,
                p: p,
              }}
              children={doc}
            />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
