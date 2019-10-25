import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import LoaderComponent from "./components/loader/LoaderComponent";
import SetsContainer from "./containers/sets/SetsContainer";
import CardsContainer from "./containers/cards/CardsContainer";

const App = ({ isLoading }) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/sets" />
          </Route>
          <Route path="/sets" component={SetsContainer} />
          <Route path="/cards/:setCode" component={CardsContainer} />
        </Switch>
      </Router>
      {isLoading && <LoaderComponent />}
    </div>
  );
};

export default connect(state => ({
  isLoading: state.app.isLoading
}))(App);
