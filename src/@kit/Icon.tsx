import { memo, ReactNode } from "react";
import clsx from "clsx";
import {Fn} from "../@types/main";

export const IconButton = memo(({ children,click}: { children: ReactNode,click:Fn }) => (
  <div onClick={click} className={"iconButton"}>{children}</div>
));
