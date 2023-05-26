import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './app/store';
import App from "./App";
import "./index.css"
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
const container = document.getElementById("root");
const root = createRoot(container);
import { injectStore } from './utils/Api'

injectStore(store); //inject the store into the API setup

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <App />
        <Footer />
      </PersistGate>
    </Provider>
  </BrowserRouter>
); 