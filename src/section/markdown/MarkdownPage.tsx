import MarkdownNavbar from "markdown-navbar";
import { useAppSelector } from "../../store/store";
import { useNav } from "../../frame/Router";

export const MarkdownPage = () => {
  const { text } = useAppSelector((state) => state.sheet);

  const { nav } = useNav();

  return (
    <div className={"markdownPage"}>
      <div className={"main"}>
        <div className={"body"}>
          {/*  <Markdown*/}
          {/*    remarkPlugins={[remarkGfm, remarkMath]}*/}
          {/*    rehypePlugins={[rehypeKatex]}*/}
          {/*    components={{*/}
          {/*      code: code,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    {text}*/}
          {/*  </Markdown>*/}
          {/*</div>*/}

          <article className="prose lg:prose-xl">{text}</article>
        </div>
        <div className="navigation">
          <MarkdownNavbar
            ordered={false}
            headingTopOffset={40}
            source={text!}
          />
        </div>
      </div>
    </div>
  );
};
