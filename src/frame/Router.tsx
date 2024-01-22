import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import { CollectionPage } from "../section/collection/CollectionPage";
import { useCallback } from "react";
import { RoutesKey, RoutesList } from "../@const/const";
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
  const items = [<MarkdownPage />, <CollectionPage />, <PortfolioPage />];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={""} element={<CollectionPage />} />
          {RoutesList.map((item, key) => {
            return <Route path={item} element={items[key]} key={key} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
