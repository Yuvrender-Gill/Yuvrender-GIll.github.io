import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Constants
import * as ROUTE_CONSTANTS from "../constants/Routes";
// Pages
import Home from "../pages/Home";

const AppRoutes = () => (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
        <Routes>
            <Route path={ROUTE_CONSTANTS.HOME} exact element={<Home/>}/>
        </Routes>
    </Router>
);

export default AppRoutes;
