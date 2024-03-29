import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./ui/Router";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./@styles/index.css";

const InitRender = () => {
  document.title = "山野雾灯Mistlamp - Repository of the Crossing Career";
  createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>,
  );
};

InitRender();
