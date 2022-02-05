import React from "react";
import { Routes, Route } from "react-router-dom";

// Constants
import * as ROUTE_CONSTANTS from "../constants/Routes";

function ExternalRoute(props) {
    return (
        <Routes>
            <Route path={ROUTE_CONSTANTS.EXTERNAL}  component={() => { 
                window.location.href = props.to; 
            }}/>
        </Routes>
    )
}
export default ExternalRoute;