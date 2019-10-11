import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Blog from '../components/Blog';
import About from '../components/About';
import Index from '../components/Index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog/123">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blog/:id" component={Blog}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/index" component={Index}></Route>



          {/* <Switch>
            <Route path="/blog/:id">
              <Blog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;