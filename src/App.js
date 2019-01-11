import React, { Component } from "react";
import { BrowserRouter, withRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./layout/Navbar";
import Landing from "./pages/Landing";
import WeChatTopup from "./pages/WeChatTopup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/wechat" component={WeChatTopup} />
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
