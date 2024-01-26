import { useAppSelector } from "../../store/store";
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
        className={"navigation"}
        ordered={false}
        headingTopOffset={40}
        source={text!}
      />
    </div>
  );
};
