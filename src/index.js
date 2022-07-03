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
import { ThemeProvider } from "./Context/themeContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <FilterProvider>
        <ProductProvider>
          <AuthProvider>
          <App />
          </AuthProvider>
        </ProductProvider>
    </FilterProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
