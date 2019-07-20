import * as React from "react";
import { render } from "react-dom";
import Table from "./components/Table";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
