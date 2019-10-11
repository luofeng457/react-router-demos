import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {pid: 100, title: 'react'},
        {pid: 101, title: 'redux'},
        {pid: 102, title: 'react router'},
      ]
    }
    this.props.history.push("/index/");
  }
  render() { 
    return (
      <div>
        <h2>Blog List</h2>
         <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index+item}><Link to={"/blog/" + item.pid}>{item.title}</Link></li>
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Home;