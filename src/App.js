import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import "./App.css";
import NavbarPage from "./layout/Navbar";
import WeChatTopup from "./pages/WeChatTopup";
import WeChatWallet from "./pages/WeChatWallet";
import PayOnBehalf from "./pages/PayOnBehalf";

library.add(fab)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarPage />
          <Route exact path="/" component={WeChatTopup} />
          <Route exact path="/wechat" component={WeChatTopup} />
          <Route exact path="/wallet" component={WeChatWallet} />
          <Route exact path="/payonbehalf" component={PayOnBehalf} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
