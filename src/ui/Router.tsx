import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { CabinPage } from "./cabin/CabinPage";
import { SackPage } from "./sack/SackPage";
import { SheetPage } from "./sheet/SheetPage";
import GadgetPage from "./sack/GadgetPage";

export const Router = () => {
  return (
    <BrowserRouter basename={"/"}>
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
