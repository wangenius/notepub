import { Button } from "../@kit/Button";
import clsx from "clsx";
import { useNav } from "./Router";
import { RoutesApi, RoutesKey } from "../@const/const";

export const Header = () => {
  const { nav } = useNav();
  return (
    <div className={"header"}>
      <div className="title" onClick={() => {}}>
        Pamphlet
      </div>
      <div className={clsx("button_menu", "nav_button")}>
        {(Object.keys(RoutesApi) as RoutesKey[])
          .slice(
            Object.keys(RoutesApi).length / 2,
            Object.keys(RoutesApi).length,
          )
          .map((item, key) => (
            <Button key={key} children={item} click={() => nav(item)} />
          ))}
      </div>
    </div>
  );
};
