import { Routes as RoutesDom, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Store from '../pages/store/Store';

const RouteComponent = () => {
  return (
    <RoutesDom>
      <Route  path="/" element={<Home />}/>
      <Route path="/store" element={<Store />}/>
    </RoutesDom>
  )
}

export default RouteComponent