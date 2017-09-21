import React from 'react';

import { Link } from 'react-router-dom';

const FeedShow = ({content}) => {
  let tags = content.tags.split(' ');
  return (
    <div className="item">
      <div className="row">
        <div className="title col-xs-10">
          <h1>{content.title}</h1>
        </div>
        <div className="back col-xs-2 text-right">
          <Link to="/photos" className="btn btn-custom">Back</Link>
        </div>
      </div>
      <div className="row">
        <div className="meta col-xs-12">
          <span><a href={'https://www.flickr.com/photos/'+content.author_id} target="_blank">Post author</a></span>
          <span>Published: {content.date_taken}</span>
          <span><a href={content.link} target="_blank">View on Flickr</a></span>
        </div>
      </div>
      <div className="row">
        <div className="item description col-xs-3">
          <div className="thumbnail">
            <img alt={content.title} src={content.media.m}/>
          </div>
        </div>
        <div className="item description col-xs-9">
          <div className="row">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="tags">
              {
                tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedShow;
