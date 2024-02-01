import { ReactNode, useState } from "react";
import { Down } from "@icon-park/react";
import clsx from "clsx";

interface AccordionProps {
  label: string;
  children: ReactNode[];
}

export const Accordion = (props: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx("accordion", open ? "open" : "")}>
      <div
        className={"accordion_btn subtitle list"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.label}
        <Down
          style={{
            transform: open ? "rotate(180deg)" : "",
          }}
        />
      </div>
      <div className="accordion_body">{open && props.children}</div>
    </div>
  );
};
