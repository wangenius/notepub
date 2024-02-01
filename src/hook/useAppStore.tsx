import { cabinSlice } from "../redux/cabinSlice";
import { sackSlice } from "../redux/sackSlice";
import { sheetSlice } from "../redux/sheetSlice";
import { useAppDispatch } from "../redux/store";

export const useAppStore = () => {
  const dispatch = useAppDispatch();
  const clear_redux = () => {
    dispatch(cabinSlice.actions.init());
    dispatch(sackSlice.actions.init());
    dispatch(sheetSlice.actions.init());
  };

  return {
    clear_store: clear_redux,
  };
};
