import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/commons/Navbar";
import { Home, About, Blog, Contact } from "./components/pages";
import Container from "@material-ui/core/Container";

import "./App.css";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
