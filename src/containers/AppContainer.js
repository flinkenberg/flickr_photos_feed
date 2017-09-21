import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import FeedIndexContainer from './FeedIndexContainer';
import FeedShowContainer from './FeedShowContainer';

class AppContainer extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" render={() => {
            return <Redirect to="/photos"/>
          }}/>
          <Route exact path="/photos" component={FeedIndexContainer}/>
          <Route path="/photos/:id" component={FeedShowContainer}/>
        </div>
      </HashRouter>
    );
  }
}

export default AppContainer;
