import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { FilterProvider } from "./Context/filterContext";
import { ProductProvider } from "./Context/productContext";
import { AuthProvider } from "./Context/authContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
        <ProductProvider>
          <AuthProvider>
          <App />
          </AuthProvider>
        </ProductProvider>
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
