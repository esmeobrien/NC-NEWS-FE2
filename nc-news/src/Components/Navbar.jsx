import React, { Component } from 'react';
import './Navbar.css'
import {Link} from '@reach/router';
import * as api from './Api.jsx';

class Navbar extends Component {
  state = {
     topics : [] 
    }

  render() {
    const { topics } = this.state;
    return (

      <div className="navbar">
        {topics.map(topic => {
          return <div 
            key={topic.slug}>
            <Link to={`/${topic.slug}`}>{topic.slug}</Link>
                 </div>
        })}
      </div>
    );
  }

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics })
    })
  }

  componentDidMount() {
    this.fetchTopics();
  }
  
}

export default Navbar; 