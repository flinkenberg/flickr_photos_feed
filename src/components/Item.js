import React from 'react';

import { Link } from 'react-router-dom';

const  Item = ({content}) => {
  return (
    <div className="item row">
      <div className="col-xs-3">
        <Link to={'/photos/'+content.id} className="thumbnail">
          <img alt={content.title} src={content.media.m}/>
        </Link>
      </div>
      <div className="col-xs-9">
        <div className="title">
          <h3><Link to={'/photos/'+content.id}>{content.title}</Link></h3>
        </div>
        <div className="meta">
          <span><a href={'https://www.flickr.com/photos/'+content.author_id} target="_blank">Post author</a></span>
          <span>Published: {content.date_taken}</span>
          <span><a href={content.link} target="_blank">View on Flickr</a></span>
        </div>
      </div>
    </div>
  );
}

export default Item;
