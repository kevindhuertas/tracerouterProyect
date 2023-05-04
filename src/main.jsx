import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store.ts";

const verificarDatosLocales = () => {
  if (!localStorage.getItem("tasks")) localStorage.setItem("tasks", "[]");
  if (!localStorage.getItem("projects")) localStorage.setItem("projects", "[]");
};
verificarDatosLocales();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
