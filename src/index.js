import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Site from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Site />
  </StrictMode>,
  rootElement
);
