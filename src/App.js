import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/main/Home/home";
import MovieDetail from "./pages/main/MovieDetail/movie-detail";
import OrderMovie from "./pages/main/OrderMovie";
import Payment from "./pages/main/Payment/payment";
import Ticket from "./pages/main/Ticket/ticket-result";
import Profile from "./pages/main/Profile";
import PrivateRoute from "./helpers/routes/PrivateRoute";
import ManageMovie from "./pages/admin/manage-movie";
import Dashboard from "./pages/admin/dashboard-movie";
import ManageSchedule from "./pages/admin/manage-schedule";

// Live Code
import BasicReact from "./pages/basic-livecode/React";
import LoginPage from "./pages/basic-livecode/Login";
import BasicHome from "./pages/basic-livecode/Home";
import BasicMovieDetail from "./pages/basic-livecode/DetailMovie";
// import PrivateRoute from "./helpers/routes-livecode/PrivateRoute";
// import PublicRoute from "./helpers/routes-livecode/PublicRoute";

// REDUX
import CounterClass from "./pages/basic-livecode/Counter/counter.class";
import CounterFunc from "./pages/basic-livecode/Counter/counter.function";
import { Provider } from "react-redux";
import store from "./store-livecode/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/basic-react" exact component={BasicReact} /> */}
            {/* <PublicRoute path="/basic-react" exact component={BasicReact} />
            <PublicRoute path="/basic-login" restricted={true} exact component={LoginPage} />
            <PrivateRoute path="/basic-home" exact component={BasicHome} />
            <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} /> */}
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/detail-movie/:movieId" component={MovieDetail} />
            <PrivateRoute exact path="/order" component={OrderMovie} />
            <PrivateRoute exact path="/payment" component={Payment} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/ticket" component={Ticket} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            {/* IsAdmin */}
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/manage-movie" component={ManageMovie} />
            <Route exact path="/admin/manage-schedule" component={ManageSchedule} />
            {/* Redux */}
            {/* <PublicRoute path="/basic-redux-counter-class" component={CounterClass} /> */}
            {/* <PublicRoute path="/basic-redux-counter-function" component={CounterFunc} /> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
