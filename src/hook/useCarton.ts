import { useCallback } from "react";
import { cabinSlice } from "../redux/cabinSlice";
import { useAppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

export const useCarton = (carton: Carton) => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const open = useCallback(() => {
    dispatch(cabinSlice.actions.setCurrent(carton));
    nav("../cabin/" + carton.name);
  }, [carton, dispatch, nav]);

  return {
    open,
  };
};
