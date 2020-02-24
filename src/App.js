import React, { useState, createContext, useEffect } from 'react';
import { browserHistory, IndexRoute, Route, Router } from "react-router";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import News from "./pages/News";
import Article from "./pages/Article";
import PageNotFound from "./pages/PageNotFound";

export const ArticleContext = createContext({
  articles: [],
  addArticles: () => {},
  articleIndex: undefined,
  setArticleIndex: () => {},
});

const App = () => {
  const [articles, setArticles] = useState([]);
  const [articleIndex, setArticleIndex] = useState(undefined);

  return (
    <ArticleContext.Provider value={{articles, addArticles: setArticles, articleIndex, setArticleIndex}}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Main} />
          <Route path="news" component={News}>
            <Route path=":newsId" component={Article} />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Route>
      </Router>
    </ArticleContext.Provider>
  );
};

export default App;
