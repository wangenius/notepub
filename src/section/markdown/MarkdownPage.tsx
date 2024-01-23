import { useAppSelector } from "../../store/store";
import { MarkdownContext } from "./MarkdownContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { code, p } from "./TextBody";
import MarkdownNavbar from "markdown-navbar";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { useLocation } from "react-router-dom";

export const MarkdownPage = () => {
  const { text } = useAppSelector((state) => state.sheet);
  const loc = useLocation();

  return (
    <div className={"markdown_page"}>
      <MarkdownContext />
      <div className={"body"}>
        <MarkdownBody />
      </div>

      <div className="navigation">
        <MarkdownNavbar ordered={false} headingTopOffset={40} source={text!} />
      </div>
    </div>
  );
};

export const MarkdownBody = () => {
  const { text } = useAppSelector((state) => state.sheet);

  return (
    <ReactMarkdown
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
