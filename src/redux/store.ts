import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { sheetSlice } from "./sheetSlice";
import { cabinSlice } from "./cabinSlice";
import { sackSlice } from "./sackSlice";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const storageConfig = {
  key: "root", // 必须有的
  version: 1,
  storage: storage, // 缓存机制
  blacklist: [], // reducer 里不持久化的数据,除此外均为持久化数据
};

//组合压缩器
const combinedReducer = combineReducers({
  sheet: sheetSlice.reducer,
  cabin: cabinSlice.reducer,
  sack: sackSlice.reducer,
});

/** @Description 持久化*/
const persistedReducer = persistReducer(storageConfig, combinedReducer);

/** @Description store生成 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export let persistor = persistStore(store);