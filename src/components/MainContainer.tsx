import React from "react";
import Dashboard from "./Dashboard";
import POSMain from "./mainPage";
import POSDashboard from "./reports";


function MainContainer() {
    return <div className="h-[100vh] w-full">
        <Dashboard />
        <POSDashboard />
    </div>
}

export default MainContainer;