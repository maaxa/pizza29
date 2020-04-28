import React from "react";
import "./styles.css";
import Header from "./resurs/header/headre";
import Navbar from "./resurs/nav/nav";
import Content from "./resurs/content/content";
import Menu from "./resurs/menu/menu";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Chat from "./resurs/chat/chat";

/*const pass = "Deliveryff29";
const log = "deliveryff";
const htt =
  "https://iiko.biz:9900/api/0/auth/access_token?user_id=deliveryff&user_secret=Deliveryff29";

console.log(htt);
console.log(pass);
console.log(log);
*/
const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div>
          <Route path="/content" component={Content} />
          <Route path="/menu" component={Menu} />
          <Route path="/chat" component={Chat} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
