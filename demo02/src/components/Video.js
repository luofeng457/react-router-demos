import React from 'react';
import { Route, Link } from 'react-router-dom';
import React_ from './video/React_';
import Vue from './video/Vue';
import Flutter from './video/Flutter';
import './Video.css';

const Video = () => {
  return (
   <div>
    <nav className="sub">
      <ul>
        <li><Link to="/video/react">React教程</Link></li>
        <li><Link to="/video/vue">Vue</Link></li>
        <li><Link to="/video/flutter">Flutter</Link></li>
      </ul>
    </nav>
    <div className="content">
      <h3>视频教程</h3>
      <Route path="/video/react" component={React_} />
      <Route path="/video/vue" component={Vue} />
      <Route path="/video/flutter" component={Flutter} />
    </div>
   </div> 
  )
}

export default Video;