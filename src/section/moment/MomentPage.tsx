import { useEffect } from "react";
import {Menu, MenuDivider, MenuItem} from "@szhsin/react-menu";
import {Comment, Download, More, Share} from "@icon-park/react";

export function MomentPage() {
  useEffect(() => {}, []);
  const evt = new Event("DOMContentLoaded", {
    bubbles: true,
    cancelable: false,
  });
  document.dispatchEvent(evt);
  return (
    <div className={"momentPage"}>
      <div className="flex items-start gap-2.5">
        <img
          className="w-8 h-8 rounded-full"
          src="/avatar.jpg"
          alt="Jese image"
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That's awesome. I think our users will really appreciate the
            improvements.
          </p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
        <Menu
            position={"anchor"}
            direction={"bottom"}
            viewScroll={"auto"}
            align={"start"}
            menuButton={
              <div className={"iconButton"}>
                <More />
              </div>
            }
            transition
        >
          <MenuItem>
            <Download />
            <p>download</p>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Comment />
            <p>comment</p>
          </MenuItem>
          <MenuItem>
            <Share />
            <p>share</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
