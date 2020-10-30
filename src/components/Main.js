import React from "react";
import { Route, HashRouter } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Faq from "./Faq";
import Register from "./Register";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HashRouter>
          <Route exact path="/" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/register" component={Register} />
        </HashRouter>
        <Footer />
      </>
    )
  }
}

export default Main;