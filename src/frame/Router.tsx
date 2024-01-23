import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import { CollectionPage } from "../section/collection/CollectionPage";
import { useCallback } from "react";
import { RoutesKey } from "../@const/const";
import { PortfolioPage } from "../section/portfolio/PortfolioPage";
import { MarkdownPage } from "../section/markdown/MarkdownPage";

export function useNav() {
  const Nav = useNavigate();
  const nav = useCallback((routes: RoutesKey) => {
    Nav("../" + routes);
  }, []);
  return { nav };
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={""} element={<CollectionPage />} />
          <Route path={`sheet/:collection`} element={<MarkdownPage />} />

          <Route path={"collection"} element={<CollectionPage />} />
          <Route path={"portfolio"} element={<PortfolioPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
