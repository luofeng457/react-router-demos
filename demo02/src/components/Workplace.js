import React from 'react';
import { Route, Link } from 'react-router-dom';
import GetUp from './workplace/GetUp';
import GetRich from './workplace/GetRich';
import GetFamous from './workplace/GetFamous';

const Workplace = () => {
  return (
    <div>
      <nav className="sub">
        <ul>
          <li><Link to="/workplace/getUp">早起攻略</Link></li>
          <li><Link to="/workplace/getRich">加薪秘籍</Link></li>
          <li><Link to="/workplace/getFamous">人生赢家</Link></li>
        </ul>
      </nav>
      <div className="content">
        <h3>心灵鸡汤</h3>
        <Route path="/workplace/getUp" component={GetUp} />
        <Route path="/workplace/getRich" component={GetRich} />
        <Route path="/workplace/getFamous" component={GetFamous} />
      </div>
    </div>
  );
};

export default Workplace;