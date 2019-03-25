import React, { Component, Fragment } from "react";
import "./Articles.css";
import { Link } from "@reach/router";
import * as api from "./Api.jsx";
import DeleteArticle from "./DeleteArticle";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return (
              <Fragment key={article.article_id}>
                <li key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </li>
                <span>Votes: {article.votes}</span> <br />
                <span>Created by: {article.author}</span>
                <DeleteArticle articles={this.state.articles} fetchArticles={this.fetchArticles}
            article_id={article.article_id}></DeleteArticle>
              </Fragment>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles(this.props.topic);
  }

  fetchArticles = () => {
    let call;
    if (this.props.topic === undefined) {
      call = api.getAllArticles;
    } else {
      call = api.getArticlesByTopic;
    }
    call(this.props.topic).then(articles => {
      this.setState({ articles });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (topic !== prevProps.topic) {
      return this.fetchArticles(topic);
    }
  }
}

export default Articles;
