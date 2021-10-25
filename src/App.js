import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home/home";
import MovieDetail from "./pages/main/MovieDetail/movie-detail";
import OrderMovie from "./pages/main/OrderMovie";
import BasicReact from "./pages/basic-livecode/React";
import LoginPage from "./pages/basic-livecode/Login";
import BasicHome from "./pages/basic-livecode/Home";
import BasicMovieDetail from "./pages/basic-livecode/DetailMovie";
import Payment from "./pages/main/Payment/payment";
import Ticket from "./pages/main/Ticket/ticket-result";
import Profile from "./pages/main/Profile";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/basic-login" exact component={LoginPage} />
          <Route path="/basic-home" exact component={BasicHome} />
          <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
          <Route path="/" exact component={Home} />
          <Route
            exact
            path="/detail-movie/:movieId"
            render={(props) => (
              <>
                <Navbar {...props} />
                <MovieDetail {...props} />
                <Footer />
              </>
            )}
          />
          <Route
            exact
            path="/order"
            render={(props) => (
              <>
                <Navbar {...props} />
                <OrderMovie />
                <Footer />
              </>
            )}
          />
          <Route
            exact
            path="/payment"
            render={(props) => (
              <>
                <Navbar {...props} />
                <Payment />
                <Footer />
              </>
            )}
          />
          <Route exact path="/ticket" component={Ticket} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
