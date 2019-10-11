import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    // console.log('id: ', this.props.match.params.id)
    console.log(this.props)
  }
  render() {
    return (
      <h2>
        {'Blog: ' + this.props.match.params.id}
      </h2>
    );
  }
};

export default Blog;