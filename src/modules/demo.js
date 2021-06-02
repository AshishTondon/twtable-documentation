import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "../subroutes";

const Demo = ({routes}) => (<Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>);

export default Demo;