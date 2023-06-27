import { React, NavBar, Footer, Provider, BrowserRouter, store, persistor, createRoot, 
  PersistGate, injectStore, ScrollToTop } 
from "./components/index";
import App from "./App";
import "./index.css"

const container = document.getElementById("root");
const root = createRoot(container);
injectStore(store); 

root.render(
  <BrowserRouter>
  <ScrollToTop /> 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavBar />
        <App />
        <Footer />
      </PersistGate>
    </Provider>
  </BrowserRouter>
); 