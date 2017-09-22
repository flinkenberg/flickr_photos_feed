import React from 'react';
import { connect } from 'react-redux';
import { getAll } from './../functions';

import Header from '../components/partials/Header';
import Loader from '../components/partials/Loader';
import SearchInputContainer from './SearchInputContainer';
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
        <SearchInputContainer/>
        <div className="app-feed container-fluid">
        {
          this.props.fetching.isFetching && !this.props.fetching.error ? <Loader/> : ''
        }
        {
          this.props.photos.filtered.length > 0 || this.props.fetching.isFetching ? this.props.photos.filtered.map((item, i) => <Item key={i} content={item}/>) : <h1>No results found.</h1>
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
      items: state.photos.items,
      filtered: state.photos.filtered
    }
  }
}

export default connect(mapStateToProps)(FeedIndexContainer);
