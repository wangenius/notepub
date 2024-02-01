import { useAppSelector } from "../../redux/store";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeKatex from "rehype-katex";
import SyntaxHighlighter from "react-syntax-highlighter";
import clsx from "clsx";

export const SheetBody = () => {
  const { text } = useAppSelector((state) => state.sheet);

  return (
    <ReactMarkdown
      className={"markdown"}
      remarkPlugins={[remarkGfm, remarkMath, remarkRehype, remarkParse]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code: code,
        p: p,
      }}
      children={text}
    />
  );
};

// 定义一个代码块样式，官网给出的案例
export const code = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  // 判断是行内代码，还是独立代码块
  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      style={{}}
      PreTag="div"
      {...props}
    />
  ) : (
    <span className="inlineCode">{children}</span>
  );
};

export const p = ({ children }: any) => {
  if (typeof children === "string") {
    switch (children.slice(0, 7)) {
      case ":::info":
        return (
          <p className={clsx("info")}>
            {children.substring(7, children.length - 3)}
          </p>
        );
      case ":::warn":
        return (
          <p className={clsx("warn")}>
            {children.substring(7, children.length - 3)}
          </p>
        );
      case ":::succ":
        return (
          <p className={clsx("succ")}>
            {children.substring(7, children.length - 3)}
          </p>
        );
      case ":::dang":
        return (
          <p className={clsx("dang")}>
            {children.substring(7, children.length - 3)}
          </p>
        );
      case ":::tips":
        return (
          <p className={clsx("tips")}>
            {children.substring(7, children.length - 3)}
          </p>
        );
    }
  }
  if (
    typeof children[0] === "string" &&
    typeof children[children.length - 1] === "string"
  ) {
    switch (children[0].slice(0, 7)) {
      case ":::info":
        return (
          <p className={clsx("info")}>
            {[children[0].substring(8)]
              .concat(children.slice(1, children.length - 1))
              .concat(
                children[children.length - 1].substring(0, children.length - 3),
              )}
          </p>
        );
      case ":::warn":
        return (
          <p className={clsx("warn")}>
            {[children[0].substring(7, children.length)]
              .concat(children.slice(1, children.length - 1))
              .concat(
                children[children.length - 1].substring(0, children.length - 3),
              )}
          </p>
        );
      case ":::succ":
        return (
          <p className={clsx("succ")}>
            {[children[0].substring(7, children.length)]
              .concat(children.slice(1, children.length - 1))
              .concat(
                children[children.length - 1].substring(0, children.length - 3),
              )}
          </p>
        );
      case ":::dang":
        return (
          <p className={clsx("dang")}>
            {[children[0].substring(7, children.length)]
              .concat(children.slice(1, children.length - 1))
              .concat(
                children[children.length - 1].substring(0, children.length - 3),
              )}
          </p>
        );
      case ":::tips":
        return (
          <p className={clsx("tips")}>
            {[children[0].substring(7, children.length)]
              .concat(children.slice(1, children.length - 1))
              .concat(
                children[children.length - 1].substring(0, children.length - 3),
              )}
          </p>
        );
    }
  }

  return <p>{children}</p>;
};
