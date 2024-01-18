import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { code } from "./TextBody";
import MarkdownNavbar from "markdown-navbar";
import { useAppSelector } from "../../store/store";
import { useNav } from "../../frame/Router";

export const MarkdownPage = () => {
  const { text } = useAppSelector((state) => state.article);

  const { nav } = useNav();

  return (
    <div className={"markdownPage"}>
      <div className={"main"}>
        {/*<IconButton click={()=>nav("collection")}>*/}
        {/*  <Back/>*/}
        {/*</IconButton>*/}
        <div className={"body"}>
          <Markdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              code: code,
            }}
          >
            {text}
          </Markdown>
        </div>
        <div className="navigation">
          <MarkdownNavbar ordered={false} headingTopOffset={40} source={text} />
        </div>
      </div>
    </div>
  );
};
