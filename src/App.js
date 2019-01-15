import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavbarPage from "./layout/Navbar";
import Landing from "./pages/Landing";
import WeChatTopup from "./pages/WeChatTopup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarPage />
          <Route exact path="/" component={Landing} />
          <Route exact path="/wechat" component={WeChatTopup} />
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
