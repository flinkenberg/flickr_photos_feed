import React from 'react';
import { connect } from 'react-redux';
import { getAll } from './../functions';

import Header from '../components/partials/Header';
import Loader from '../components/partials/Loader';
import Item from '../components/Item';

class FeedIndexContainer extends React.Component {
  componentDidMount() {
    if (this.props.photos.items.length === 0) {
      getAll();
    }
  }
  render() {
    return (
      <div>
        <Header content="Flickr Public Feed"/>
        <div className="app-feed container-fluid">
        {
          this.props.fetching.isFetching && !this.props.fetching.error ? <Loader/> : ''
        }
        {
          this.props.photos.items.length > 0 ? this.props.photos.items.map((item, i) => <Item key={i} content={item}/>) : ''
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.photos.fetching,
    photos: {
      items: state.photos.items
    }
  }
}

export default connect(mapStateToProps)(FeedIndexContainer);
