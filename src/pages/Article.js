import React, { useContext } from 'react';
import News from '../components/News';
import { ArticleContext } from "../App";

const Article = () => {
  const { articles, articleIndex } = useContext(ArticleContext);

  return (
    <div>
      {articles && <News {...articles[articleIndex]} />}
    </div>
  )
};

export default Article;