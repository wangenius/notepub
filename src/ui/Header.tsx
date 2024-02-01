import { useNavigate } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { IconButton } from "@material-tailwind/react";
import { Icons } from "./@kit/Icon";
import Box = Icons.Box;
import User = Icons.User;
import Ticket = Icons.Ticket;
import Search = Icons.Search;

export const Header = () => {
  const nav = useNavigate();
  // const { clear_store } = useAppStore();
  // const { renovate } = useCabin();
  const position = useWindowScroll();
  const scrollShadow = {
    boxShadow:
      position.y >= 10
        ? "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
        : "none",
  };

  return (
    <div className={"header"} style={scrollShadow}>
      <div className="search">
        <Search />
        <input />
      </div>

      <IconButton
        variant={"text"}
        placeholder={""}
        onClick={() => nav("../cabin")}
        ripple={false}
      >
        <Box />
      </IconButton>

      <IconButton
        variant={"text"}
        placeholder={""}
        onClick={() => nav("../sack")}
        ripple={false}
      >
        <Ticket />
      </IconButton>

      <IconButton variant={"text"} placeholder={""} ripple={false}>
        <User />
      </IconButton>
    </div>
  );
};
