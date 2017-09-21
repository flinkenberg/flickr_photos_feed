import React from 'react';
import { connect } from 'react-redux';
import { findPhoto } from '../functions';

import Header from '../components/partials/Header';
import FeedShow from '../components/FeedShow';

class FeedShowContainer extends React.Component {
  render() {
    let matchedPhoto = findPhoto(this.props.match.params.id);
    return (
      <div>
        <Header content="Flickr Public Feed"/>
        <div className="photo-single container-fluid">
        {
          matchedPhoto !== null ? <FeedShow content={matchedPhoto}/> : <h1>Content not found.</h1>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: {
      items: state.photos.items
    }
  }
}

export default connect(mapStateToProps)(FeedShowContainer);
