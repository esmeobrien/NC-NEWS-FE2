import React, {
  Component
} from 'react';
import {
  Router
} from '@reach/router';
import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Articles from './Components/Articles';
import Article from './Components/Article';
import User from './Components/User';

class App extends Component {
  state = {
    user: 'user_test'
  }
  render() {
    const {
      user
    } = this.state;
    return ( <
      div className = "App container" >
      <
      Header user = {
        user
      }
      /> <
      Navbar / >
      <
      Sidebar / >
      <
      Router className = "Contents" >
      <
      Articles path = "/" / >
      <
      Articles path = "/:topic" / >
      <
      Article path = "/articles/:article_id" / >
      <
      User path = "/users/:username" / >
      <
      /Router> <
      Footer / >

      <
      /div>
    );
  }
}

export default App;