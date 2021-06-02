//const {Introduction, Version, Attribute, Serverside, Clientside, Demo1, Demo2, Demo} =  require("./modules/attribute");

import Attribute from "./modules/attribute";
import Clientside from "./modules/clientside";
import Demo from "./modules/demo";
import Demo1 from "./modules/demo1";
import Demo2 from "./modules/demo2";
import Introduction from "./modules/introduction";
import Serverside from "./modules/serverside";
import Clientsidedownload from "./modules/clientsidedownload";
import Hello from "./modules/hello";

const routes = [
    {
      path: "/introduction",
      component: Introduction,
      tab: "Introduction"
    },{
      path: "/hello-world",
      component: Hello,
      tab: "Hello World Twtable"
    },{
      path: "/clientside",
      component: Clientside,
      tab: "Client-side Paging"
    },{
      path: "/clientside-download",
      component: Clientsidedownload,
      tab: "Client-side Paging (download)"
    },{
      path: "/attribute",
      component: Attribute,
      tab: "Attribute"
    },{
      path: "/pagination",
      component: Demo,
      tab: "pagination",
      routes:[{
            path: "/pagination/serverside",
            component: Serverside,
            tab: "Server-side Paging"
          },{
            path: "/pagination/clientside",
            component: Clientside,
            tab: "Client-side Paging"
          }]
        },{
      path: "/demo",
      component: Demo,
      tab: "Demo",
      routes: [{
          path: "/demo/Demo1",
          component: Demo1,
          tab: "Demo1"
        },{
          path: "/demo/Demo2",
          component: Demo2,
          tab: "Demo2"
        }]
    },{
      path: "*",
      component: Introduction
    }
  ];

export default routes;