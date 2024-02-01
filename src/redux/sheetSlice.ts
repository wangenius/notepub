import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SheetSlice {
  state: boolean;
  info?: Sheet;
  text?: string;
}

export const InitSheet: SheetSlice = {
  state: false,
};

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: InitSheet,
  reducers: {
    init: () => {
      return InitSheet;
    },
    setText: (state, action: PayloadAction<string>) => {
      return Object.assign({}, state, {
        text: action.payload,
      });
    },
    setState: (state, action: PayloadAction<boolean>) => {
      return Object.assign({}, state, {
        state: action.payload,
      });
    },
    setSheet: (state, action: PayloadAction<Sheet>) => {
      return Object.assign({}, state, {
        sheet: action.payload,
      });
    },
    toggle: (state, action: PayloadAction<SheetSlice>) => {
      return action.payload;
    },
  },
});
