import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Index from '../components/Index';
import Video from '../components/Video';
import Workplace from '../components/Workplace';

const App = () => {
  let routeConfig = [
    {path: '/', title: '博客首页', exact: true, component: Index},
    {path: '/video', title: '视频教程', exact: false, component: Video},
    {path: '/workplace', title: '职场技能', exact: false, component: Workplace},
  ]

  return (
    <Router>
      <div className="container">
        <div className="nav">
          <h2>一级导航</h2>
          <nav className="left">
            <ul>
              {
                routeConfig.map((item, index) => {
                  return (
                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
        <div className="main">
          {
            routeConfig.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
              )
            })
          }
        </div>
      </div>
    </Router>
  );
}

export default App;