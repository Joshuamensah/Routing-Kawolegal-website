import React from "react";
import { BrowserRouter as AppRouter, Route,  } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login'
import Register from './Components/Register'
import Startups from './Components/Startups'
import ServiceDetails from './Components/ServicesDetails'
const Router = () => {
  return (
    <AppRouter>

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/startups" component={Startups} />
      <Route path="/services/:id" component={ServiceDetails} />
    </AppRouter>
  );
};

export default Router;
