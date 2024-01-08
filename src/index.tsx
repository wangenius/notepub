import React from "react";
import { createRoot } from "react-dom/client";
import "./@styles/index.css";
import { Router } from "./frame/Router";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const InitRender = () => {
  document.title = "Uplet - Repository of the Crossing Career";
  createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>,
  );
};

InitRender();
