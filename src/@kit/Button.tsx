import { DefaultProps, Press } from "../@types/main";
import { forwardRef } from "react";
import { pop } from "../frame/PopProvider";
import clsx from "clsx";

interface ButtonProps extends DefaultProps {
  click?: Press;
}

export const Button = forwardRef(
  ({ cs, click, ...props }: ButtonProps, ref) => {
    return <button className={cs} onClick={click} {...props} />;
  },
);

export const MenuButton = forwardRef(({ onClick, cs,...props }: any, ref) => {
  return (
    <div
      className={clsx("menuPanel_item",cs)}
      onClick={() => {
        onClick();
        pop.close();
      }}
      {...props}
    />
  );
});
