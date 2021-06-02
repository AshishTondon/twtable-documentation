import { useCallback, useEffect, useState } from "react";
import {
    HashRouter as Router,
    Switch
  } from "react-router-dom";

import routeConfig from "./config";
import Menu from "./menu";
import Nav from "./navHeader";
import RouteWithSubRoutes from "./subroutes";

function Routes() {
    const [activetab, setActivetab] = useState("");
    const [activetabname, setActivetabname] = useState("");

    const toggelmenu = (status) => {
        setActivetab(status);
    };

    useEffect(() => {
      setActivetabname(localStorage.tab);
    },[]);

    const settabname = useCallback((tab) => {
        console.log("tab", tab);
        setActivetabname(tab);
        localStorage.tab = tab;
    },[]);

    return (
        
            <div className="wrapper">
                <Menu activetab={activetab} activetabname={activetabname} settabname={settabname}/>

                <div id="content">
                    <Nav toggelmenu={toggelmenu} status={activetab.length?"":"active"}/>
                    <Router>
                      <Switch>
                        {routeConfig.map((route, i) => (
                            route.hasOwnProperty('component')?<RouteWithSubRoutes key={i} {...route} />:null
                        ))}
                      </Switch>
                    </Router>
                </div>
                
            </div>
    );
}

export default Routes;