import { Button } from "../@kit/Button";
import clsx from "clsx";
import { useNav } from "./Router";
import { api } from "../axios/collection";
import { collectionSlice } from "../store/collectionSlice";
import { Collection } from "../@types/sheet";
import { useAppDispatch } from "../store/store";
import { Logo } from "../@kit/Icon";

export const Header = () => {
  const { nav } = useNav();
  const dispatch = useAppDispatch();
  return (
    <div className={"header"}>
      <div
        className="title"
        onClick={() => {
          api.collection.renovate().then((res) => {
            dispatch(
              collectionSlice.actions.setCollections(
                (res.data as Collection).sub,
              ),
            );
          });
        }}
      >
        <Logo />
        山野雾灯
      </div>
      <div className={clsx("button_menu", "nav_button")}>
        <Button children={"缤纷乐园"} click={() => nav("collection")} />
        <Button children={"独家村"} click={() => nav("portfolio")} />
      </div>
    </div>
  );
};
