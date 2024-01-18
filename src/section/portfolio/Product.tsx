import { PaperClipIcon } from "@heroicons/react/16/solid";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { createElement } from "react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Product() {
  const data = [
    {
      label: "Dashboard",
      value: "Dashboard",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Readme",
      value: "Readme",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div className={"product"}>
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold leading-10 text-gray-900">
          ordfly
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Rhinoceros 5 extension
        </p>
      </div>
      <Tabs value="Dashboard">
        <TabsHeader className={"mt-5"} placeholder={undefined}>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} placeholder={undefined}>
              <div className="flex items-center gap-2">
                {createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={undefined}>

              <TabPanel value={"Dashboard"}>
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
                        Application for
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        rhino designer
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        wangenius@qq.com
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        price
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        $0
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        About
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        Ordfly is a rhino plugin developed in python for implementing
                        coherent mapping of 2D lines into space. Examples include the
                        implementation of a rotating staircase, and some skin and form
                        generation.
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        Attachments
                      </dt>
                      <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
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
                                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a
                                  href="#"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                          <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                              <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                              />
                              <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_back_end_developer.pdf
                      </span>
                                <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a
                                  href="#"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </TabPanel>
              <TabPanel value={"Readme"}>
                <div className="">fff</div>
              </TabPanel>

        </TabsBody>
      </Tabs>

    </div>
  );
}
