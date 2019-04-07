import React, {Component} from "react";
import {Router} from "@reach/router";
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import User from "./Components/User";
import AddArticle from "./Components/AddArticle";

class App extends Component {
  state = {
    user: "tickle122",
    topics:["cooking","football","coding"]
  };
  render() {
    const {user} = this.state;
    return ( 
    <div className = "App container" >
      <Header user = {user}/>  
      <Navbar / >
      <Router className = "Contents" >
      <Articles path = "/" / >
      <Articles path = "/:topic" / >
      <AddArticle topics = {this.state.topics} path="/create"/>
      <Article user = {this.state.user} path = "/articles/:article_id" / >
      <User path = "/users/:username" / >
      </Router>  
      <Footer / >
      </div>
    );
  }
}

export default App;