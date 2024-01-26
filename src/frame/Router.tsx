import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { CabinPage } from "../section/cabin/CabinPage";
import { SackPage } from "../section/sack/SackPage";
import { SheetPage } from "../section/sheet/SheetPage";
import GadgetPage from "../section/sack/GadgetPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={""} element={<CabinPage />} />
          <Route path={"cabin"} element={<CabinPage />} />
          <Route path={`cabin/:collection`} element={<SheetPage />} />
          <Route path={"gadget"} element={<GadgetPage />} />
          <Route path={"sack"} element={<SackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
