import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {vs as style} from "react-syntax-highlighter/dist/cjs/styles/prism";

export const TextBody = () => {
  return <div></div>;
};

// 定义一个代码块样式，官网给出的案例
export const code = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  // 判断是行内代码，还是独立代码块
  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      style={{ }}
      PreTag="div"
      {...props}
    />
  ) : (
    <span className="inlineCode">{children}</span>
  );
};

export const a = ({ ...props }) => {
  return <a className={"link"} {...props}/>;
};