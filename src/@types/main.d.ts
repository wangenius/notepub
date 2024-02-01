import { ForwardedRef, ReactNode } from "react";

type Ref = ForwardedRef<any>;

interface DefaultProps {
  children?: ReactNode;
  cs?: string;
}

type Press = (e: any) => any;

/** @Description 定义基本方法 */
type Fn = (...props: any) => any;
