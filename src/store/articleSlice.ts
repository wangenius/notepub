import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ArticleSlice {
  state: boolean;
  text: string;
}

export const InitArticle: ArticleSlice = {
  state: false,
  text: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState: InitArticle,
  reducers: {
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
    toggle:(state,action:PayloadAction<ArticleSlice>) =>{
      return action.payload
    }
  },
});
