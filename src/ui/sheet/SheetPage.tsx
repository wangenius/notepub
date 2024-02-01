import { useAppSelector } from "../../redux/store";
import { SheetContent } from "./SheetContent";
import MarkdownNavbar from "markdown-navbar";
import { SheetBody } from "./SheetBody";

export const SheetPage = () => {
  const { text } = useAppSelector((state) => state.sheet);

  return (
    <div className={"markdown_page"}>
      <SheetContent />
      <SheetBody />
      <MarkdownNavbar
        updateHashAuto={false}
        className={"navigation"}
        ordered={false}
        headingTopOffset={40}
        source={text!}
        onHashChange={() => {}}
      />
    </div>
  );
};
