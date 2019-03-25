import React, { Component } from "react";
import * as api from "./Api";

class DeleteComment extends Component {
  render() {
    return (
      <div>
          <button onClick={this.handleSubmit}>Delete Comment</button>
      </div>
    );
  }

  handleSubmit = () => {
    const article_id = this.props.article_id;
    const comment_id = this.props.comment_id;
    api
      .deleteComment(article_id,comment_id)
      .then(() => {
        this.props.fetchComments();
  
      })
      .catch(err => alert("There was an error in deleting your comment :("));

  };
}

export default DeleteComment;
