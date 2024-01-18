import { DefaultProps, Press } from "../@types/main";
import { forwardRef } from "react";

interface ButtonProps extends DefaultProps {
  click?: Press;
}

export const Button = forwardRef(
  ({ cs, click, ...props }: ButtonProps, ref) => {
    return <button className={cs} onClick={click} {...props} />;
  },
);
