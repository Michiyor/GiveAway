import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/register" exact>
                    <Register/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
