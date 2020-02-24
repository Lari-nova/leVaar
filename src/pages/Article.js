import React, {Component, useContext} from 'react';
import axios from 'axios';

import News from '../components/News';
import {ArticleContext} from "../App";

const Article = () => {
  const { articles, articleIndex } = useContext(ArticleContext);

  return (
    <div>
      {articles && <News {...articles[articleIndex]} />}
    </div>
  )
};

export default Article;