import React, { Component } from "react";
import * as api from "./Api";

class AddComment extends Component {
  state = {
    isLoading: false
  };
  render() {
    return (
      <div>
        {this.state.isLoading && <p>Posting comment...</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">Comment: </label>
          <input type="text" id="comment" />
          <button>Submit Comment</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const body = event.target.comment.value;
    const user_id = this.props.user;
    const article_id = this.props.article_id;
    api
      .postComment(article_id, { "username": user_id, "body": body })
      .then(comment => {
        this.setState({ isLoading: false });
        this.props.fetchComments();
      })
      .catch(err => alert("There was an error in posting your comment :("));
  };
}

export default AddComment;
