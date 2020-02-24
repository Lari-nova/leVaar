import React from 'react';
import NewsList from '../components/NewsList';

const News = (props) => {
  return (
    <div>
      {
        (!props.children) ?
          (<NewsList />)
          :
          (props.children)
      }
    </div>
  )
};

export default News;