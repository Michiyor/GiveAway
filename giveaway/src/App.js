import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import HomeHeader from "./components/Home/HomeHeader";
import HomeHero from "./components/Home/HomeHero";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/login" exact>
                <HomeHeader/>
            </Route>
            <Route path="/register" component={HomeHero}/>
        </Switch>
    </Router>

  );
}

export default App;
