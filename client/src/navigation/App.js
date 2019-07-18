import React from 'react';
import { connect } from 'react-redux';

import { Private } from './Private';
import { Public } from './Public';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin,
});

const App = props => {
  const { isAuthenticated, isAdmin } = props;

  return isAuthenticated ? <Private isAdmin={isAdmin} /> : <Public />;
}

export default connect(mapStateToProps)(App);
