import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CabinSlice {
  cartons?: Carton[];
  current_carton?: Carton;
}

export const InitialCabinSlice: CabinSlice = {
  cartons: [],
};

export const cabinSlice = createSlice({
  name: "cabin",
  initialState: InitialCabinSlice,
  reducers: {
    init: () => {
      return InitialCabinSlice;
    },
    setCurrent: (state, action: PayloadAction<Carton>) => {
      return Object.assign({}, state, {
        current_carton: action.payload,
      });
    },
    setCartons: (state, action: PayloadAction<Carton[]>) => {
      return Object.assign({}, state, {
        cartons: action.payload,
      });
    },
  },
});
