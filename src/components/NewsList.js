import React, { useContext, useEffect} from 'react';
import axios from 'axios';
import News from '../components/News';
import {ArticleContext} from "../App";


const NewsList = () => {
  const { articles, addArticles } = useContext(ArticleContext);

  useEffect(() => {
    axios.get('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0b0cfa8211f14fcbb7cc5958c15bd816').then(response => {
      addArticles(response.data.articles);
    })
  }, []);

  if (!articles.length) {
    return null;
  }

  const news = articles.map((news, index) => {
    return <News key={index} {...news} index={index} isLink={true} />
  });

  return (
    <div>
      <h1>Articles</h1>
      {news}
    </div>
  )
};

export default NewsList;