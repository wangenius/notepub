import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SackSlice {
  /*存储所有的gadget基本信息*/
  sack?: Sack;
  /*当前gadget的基本信息*/
  gadget?: Gadget;
  /*当前gadget的doc*/
  doc?: string;
}

export const InitialSack: SackSlice = {};

export const sackSlice = createSlice({
  name: "sack",
  initialState: InitialSack,
  reducers: {
    setGadget: (state, action: PayloadAction<Gadget>) => {
      return Object.assign({}, state, {
        gadget: action.payload,
      });
    },
    setSack: (state, action: PayloadAction<Sack>) => {
      return Object.assign({}, state, {
        sack: action.payload,
      });
    },
    setText: (state, action: PayloadAction<string>) => {
      return Object.assign({}, state, {
        doc: action.payload,
      });
    },
  },
});
