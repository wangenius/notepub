import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Collection } from "../@types/sheet";

export interface CollectionSlice {
  collections?: Collection[];
  current?: Collection;
}

export const InitCollection: CollectionSlice = {
  collections: [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState: InitCollection,
  reducers: {
    setCurrent: (state, action: PayloadAction<Collection>) => {
      return Object.assign({}, state, {
        current: action.payload,
      });
    },
    setCollections: (state, action: PayloadAction<Collection[]>) => {
      return Object.assign({}, state, {
        collections: action.payload,
      });
    },
  },
});
