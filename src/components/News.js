import React, { useContext } from 'react';
import { Link } from 'react-router';
import { ArticleContext } from "../App";

const News = (props) => {
  const { title, author, description, publishedAt, content, index, isLink } = props;
  const { setArticleIndex } = useContext(ArticleContext);

  return (
    <div className="container h-25">
      <div className="card border-primary mb-1">
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
        <div className="card-body">
          <p>{description}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>

  )
};

export default News;