import React, { Component } from "react";
import * as api from "./Api";
import { navigate } from "@reach/router";

class AddArticle extends Component {
  state = {
    title: "",
	body: "",
	username: "",
    isPosted: false,
    err: null
  };
  render() {
	const { topics } = this.props;
    return (
      <div>
        <h2>Add your own article!</h2> <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label> <br />
          <input
            type="text"
            placeholder="Article Name"
            id="title"
            required
            value={this.state.title}
            onChange={this.handleChange}
          /> <br />
          <label>Select A Topic:</label> <br />
          <select id="topic">
            {topics.map(topic => {
              return (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              );
            })}
          </select> <br />
          <label>Body:</label> <br />
          <textarea
            placeholder="Your article goes here."
            type="text"
            id="body"
            required
            value={this.state.body}
            onChange={this.handleChange}
          /> <br />
          <br />
          <button>Submit Article</button>
        </form>
      </div>
    );
  }
  handleSubmit = event => {
    const title = this.state.title;
    const body = this.state.body;
    const topic = event.target.topic.value;
    const user_id = this.props.user;
    event.preventDefault();
    api
      .postArticle(topic, { "title": title, "body": body, "username": user_id })
      .then(() => {
        alert("New Article Added!");
        navigate(`/${topic}`);
        this.setState({ title: "", body: "", username:""});
      })
      .catch(() => {
        this.setState({ err: true });
      });
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
}

export default AddArticle;
