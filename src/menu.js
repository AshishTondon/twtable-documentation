import React from "react";
import routerConfig from "./config";

const Tab = ({nav, classes, id, activetabname, settabname}) => (
    <ul className={classes} id={id}>
        {nav.map((route, index) => 
            (<li key={index}>
                
                {route.hasOwnProperty('routes')? 
                    <React.Fragment>
                        <a href={`#tab-${index}`} data-toggle="collapse" aria-expanded={activetabname === route.tab?true:false} 
                        className="dropdown-toggle" onClick={() => settabname(route.tab)}>{route.tab}</a>
                        <Tab nav={route.routes} classes="collapse list-unstyled" id={`tab-${index}`} settabname={settabname}/>
                    </React.Fragment>:
                    <a onClick={() => settabname(route.tab)} href={`#${route.path}`} aria-expanded={activetabname === route.tab?true:false} >{route.tab}</a> }
            </li>))}
    </ul>
)

const Menu = ({activetab, settabname}) => {

    return(<nav id="sidebar" className={activetab}>
        <div className="sidebar-header">
            <h3>Twtable</h3>
        </div>

        <Tab nav={routerConfig} classes="list-unstyled components" settabname={settabname}/>
    </nav>);
}

export default Menu;