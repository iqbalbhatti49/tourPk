import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from "./App";
import "./index.css"
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <NavBar />
      <App />
      <Footer />
    </Provider>
  </BrowserRouter>
);