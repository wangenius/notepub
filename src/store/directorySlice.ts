import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Directory } from "../@types/article";

export interface DirectorySlice {
  rootDirectory?: Directory;
  crumbs: Directory[];
  state: boolean;
}

export const InitDirectory: DirectorySlice = {
  state: false,
  crumbs: [],
};

export const directorySlice = createSlice({
  name: "directory",
  initialState: InitDirectory,
  reducers: {
    setCrumbs: (state, action: PayloadAction<Directory[]>) => {
      return Object.assign({}, state, {
        crumbs: action.payload,
      });
    },
    setRootDirectory: (state, action: PayloadAction<Directory>) => {
      return Object.assign({}, state, {
        crumbs: action.payload,
      });
    },
  },
});
