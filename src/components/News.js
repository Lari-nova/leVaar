import React, { useContext } from 'react';
import { Link } from 'react-router';
import { ArticleContext } from "../App";

const News = (props) => {
  const { title, author, description, publishedAt, content, index, isLink } = props;
  const { setArticleIndex } = useContext(ArticleContext);

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          {
            isLink ?
              <Link to={`/news/${index}`} onClick={() => setArticleIndex(index)}>
              {title}
            </Link>
              :
              <h>{title}</h>
          }
        </div>
        <div className="card-body text-secondary">
          <p>{author}</p>
          <p>{description}</p>
          <p>{publishedAt}</p>
          <p>{content}</p>
        </div>
      </div>
    )
};

export default News;