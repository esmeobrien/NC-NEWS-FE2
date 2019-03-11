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

      <nav className="navbar navbar-light bg-light row">
        {topics.map(topic => {
          return <button className="btn btn-sm btn-outline-secondary col-md-3"
            key={topic.slug}>
            <Link to={`/${topic.slug}`}>{topic.slug}</Link>
                 </button>
        })}
      </nav>
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