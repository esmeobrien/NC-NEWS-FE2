import React, { Component, Fragment } from "react";
import * as api from "./Api";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoaded: false,
    isClicked: false
  };

  render() {
    const { article, comments } = this.state;
    return (
      <div className="Content">
        <Fragment>
          <h2>{article.title}</h2>
          {this.props.user.user_id === this.state.article.user_id}
          <em>
            <p>Created by: {article.author}</p>
          </em>
          <span>
            <button
              onClick={() => this.voteOnArticle(1)}
              className="btn btn-default"
            >
              Upvote
            </button>
          </span>
          <span>
            <button
              onClick={() => this.voteOnArticle(-1)}
              className="btn btn-default"
            >
              Downvote
            </button>
          </span>
          <h4>Created by: {article.author}</h4>
          <h4>Votes: {article.votes}</h4>
          <p>{article.body}</p>
          <AddComment
            postNewComment={this.postNewComment}
            fetchComments={this.fetchComments}
            user={this.props.user}
            article_id={this.props.article_id}
          />
          <div>
            {comments.map(comment => {
              return (
                <Fragment key={comment.comment_id}>
                  <div className="card mb-4">
                    <div className="card-body">
                      <p key={comment.comment_id}>{comment.body}</p>
                      <span>
                        <button onClick={() => this.voteOnComment(comment.comment_id,1)} className="btn btn-default">
                          Upvote
                        </button>
                        <button onClick={() => this.voteOnComment(comment.comment_id, -1)}  className="btn btn-default">
                          Downvote
                        </button>{" "}
                        Votes: {comment.votes}
                      </span>
                      <div className="row mb-2 mt-2">
                        <div className="col-md-6 text-center">
                          Created: {comment.created_at}
                        </div>
                        <div className="col-md-6 text-center">
                          Author: {comment.author}
                        </div>
                        <DeleteComment comment_id={comment.comment_id} article_id={this.props.article_id} fetchComments={this.fetchComments}></DeleteComment>
                        {this.props.user.username === comment.author}
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </Fragment>
      </div>
    );
  }

  fetchArticle = () => {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };

  voteOnArticle = val => {
    api.voteOnArticle(this.props.article_id, val).then(obj => {
      this.fetchArticle();
      this.setState({ obj });
    });
  };

  fetchComments = () => {
    api.getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };

  voteOnComment = (comment_id, val) => {
    api.voteOnComment(this.props.article_id, comment_id, val).then(obj => {
      this.fetchComments();
      this.setState({ obj });
    });
  };

  componentDidMount() {
    this.fetchArticle(this.props.article_id);
    this.fetchComments(this.props.comment_id);
  }
}

export default Article;
