import React, { Component } from 'react';
import {Router} from '@reach/router';
import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Articles from './Components/Articles';
import Article from './Components/Article';
import User from './Components/User';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Navbar/>
          <Sidebar/>
      <Router className="Contents">
          <Articles path="/"/>
          <Article path="/articles/:article_id"/>
          <User path="/users/:username"/>
      </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;