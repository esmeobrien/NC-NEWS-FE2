import React, { Component } from "react";
import * as api from "./Api";

class DeleteArticle extends Component {
  render() {
    return (
      <div>
          <button className="btn btn-default" onClick={this.handleSubmit}>Delete Article</button>
      </div>
    );
  }

  handleSubmit = () => {
    const article_id = this.props.article_id;
    api
      .deleteArticle(article_id)
      .then(() => {
        this.props.fetchArticles();
  
      })
      .catch(err => alert("There was an error in deleting your article :("));

  };
}

export default DeleteArticle;
