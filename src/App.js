import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
const historyConfig = {
  basename: "juanpadev"
};

const browserHistory = createBrowserHistory(historyConfig);
function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
