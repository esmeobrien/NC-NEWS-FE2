import React, { Component, Fragment } from 'react';
import * as api from './Api';


class Article extends Component {

    state = {
      article: {},
      comments: []
    }

    render() {
    const { article, comments } = this.state;
    return ( 
     
      <div class="Content">
         { console.log(article) }
        <Fragment>

        <h2>{article.title}</h2>
        <span><button onClick={() => this.voteOnArticle(1)} className="btn btn-outline-success m-2">Upvote</button></span>
        <span><button onClick={() => this.voteOnArticle(-1)} className="btn btn-outline-danger m-2">Downvote</button></span>
        <h4>Created by: {article.author}</h4>
        <h4>Votes: {article.votes}</h4>
        <p>{article.body}</p>
        <div>
          { comments.map(comment => {
            return <Fragment>
              <div className="card mb-4">
              <div className="card-body">
              <p key={comment.comment_id}>{comment.body}</p>
             <span><button className="btn btn-outline-success m-2">Upvote</button>
             <button className="btn btn-outline-danger m-2">Downvote</button> Votes: {comment.votes}</span>
            <div className="row mb-2 mt-2">
            <div className="col-md-6 text-center">Created: {comment.created_at}</div>
            <div className="col-md-6 text-center">Author: {comment.author}</div>
            </div>
            </div>
            </div>
       </Fragment>
       })}
       </div>
      </Fragment>
     </div>
   );
 }

  fetchArticle = () => {
    api.getArticleById(this.props.article_id).then((article) => {
      this.setState({ article })
    })
  }

  voteOnArticle = val => {
    api.voteOnArticle(this.props.article_id, val).then((obj) => {
      this.setState({ obj })
    })
  }

  fetchComments = () => {
    api.getArticleComments(this.props.article_id).then((comments) => {
      this.setState({ comments });
    })
  }
  
  componentDidMount() {
    this.fetchArticle(this.props.article_id);
    this.fetchComments(this.props.comment_id);
  }

}



export default Article; 