import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { storeFilteredResults } from '../actions';

import magnifyingGlass from '../magnifying-glass.svg';

class SearchInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this._filter = this._filter.bind(this);
    this._handleSearch = this._handleSearch.bind(this);
    this._clearInput = this._clearInput.bind(this);
  }
  componentDidMount() {
    this._input.focus();
  }
  _handleSearch() {
    if (this._input.value.indexOf(' ') !== 0) {
      this._filter();
    }
  }
  _clearInput() {
    if (this._input.value === 'Search photos..') {
      this._input.value = '';
    } else {
      if (this._input.value.length === 0 || this._input.value.indexOf(' ') === 0) {
        this._input.value = 'Search photos..';
      }
    }
  }
  _filter() {
    let results = [];
    let inputValue = this._input.value.toLowerCase();
    this.props.photos.map(item => {
      if (item.title.toLowerCase().indexOf(inputValue) !== -1) {
        results.push(item);
      }
      return item;
    });
    store.dispatch(storeFilteredResults(results));
  }
  render() {
    return (
      <div className="search container-fluid">
        <img src={magnifyingGlass} className="magnifying-glass" alt="Search"/>
        <input onKeyUp={this._handleSearch} onFocus={this._clearInput} onBlur={this._clearInput} defaultValue="Search photos.." ref={input => this._input = input} className="search-input" spellCheck="false"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos.items
  }
}

export default connect(mapStateToProps)(SearchInputContainer);
