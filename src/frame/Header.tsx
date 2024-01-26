import { Button } from "../@kit/Button";
import clsx from "clsx";
import { api } from "../axios/api";
import { cabinSlice } from "../store/cabinSlice";
import { Cabin } from "../@types/sheet";
import { useAppDispatch } from "../store/store";
import { Logo } from "../@kit/Icon";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={"header"}>
      <div
        className="title"
        onClick={() => {
          api.cabin.renovate().then((res) => {
            dispatch(
              cabinSlice.actions.setCartons((res.data as Cabin).cartons),
            );
          });
        }}
      >
        <Logo />
        山野雾灯
      </div>
      <div className={clsx("button_menu", "nav_button")}>
        <Button children={"村屋"} click={() => nav("../cabin")} />
        <Button children={"一麻袋小玩意"} click={() => nav("../sack")} />
      </div>
    </div>
  );
};
