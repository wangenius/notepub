import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import { Discover } from "../page/Discover";
import { ArticlePage } from "../page/ArticlePage";
import { Search } from "../page/Search";
import { About } from "../page/About";
import { useCallback } from "react";
import { RoutesKey, RoutesList } from "../@const/const";
import { Moment } from "../page/Moment";
import { Portfolio } from "../page/Portfolio";
import {PopContainer} from "./PopProvider";

export function useNav() {
  const Nav = useNavigate();
  const nav = useCallback((routes: RoutesKey) => {
    Nav("../" + routes);
  }, []);
  return { nav };
}

export const Router = () => {
  const items = [
    <Discover />,
    <ArticlePage />,
    <Portfolio />,
    <Moment />,
    <About />,
  ];

  return (
    <BrowserRouter>
      <PopContainer />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={""} element={<Discover />} />
          {RoutesList.map((item, key) => {
            return <Route path={item} element={items[key]} key={key} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
