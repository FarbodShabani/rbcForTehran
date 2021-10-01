import React from "react";
import ReactDOM from "react-dom";
import Scheduler from "./components/Scheduler.component";
import { events } from "./eventData";

import "./styles.css";

import "./components/Scheduler.styles.scss";

const App = () => {
  const now = () => new Date(2019, 1, 12);
  return (
    <div className="App">
      <div className="control-container"></div>
      <Scheduler timezone={"Asia/Tehran"} now={now} events={events} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
