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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/basic-login" exact component={LoginPage} />
          <Route path="/basic-home" exact component={BasicHome} />
          <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <Navbar {...props} />
                <Home />
                <Footer />
              </>
            )}
          />
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
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
