import { useAppDispatch } from "../redux/store";
import { api } from "../axios/api";
import { cabinSlice } from "../redux/cabinSlice";
import { useCallback } from "react";

export const useCabin = () => {
  const dispatch = useAppDispatch();

  /** 深度刷新cabin结构 */
  const renovate = useCallback(() => {
    api.cabin.renovate().then((res) => {
      dispatch(cabinSlice.actions.setCartons((res.data as Cabin).cartons));
    });
  }, [dispatch]);

  return {
    renovate,
  };
};
