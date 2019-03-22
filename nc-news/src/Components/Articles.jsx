import React, { Component, Fragment } from "react";
import "./Articles.css";
import { Link } from "@reach/router";
import * as api from "./Api.jsx";

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
              <Fragment>
                <li key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </li>
                <span>Votes: {article.votes}</span>
                <span>Created by: {article.author}</span>
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
