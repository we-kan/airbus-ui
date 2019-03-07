import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render() {
    if (!this.props.isAuthenticated) {
      const renderComponent = () => <Redirect to={{ pathname: '/' }} />;
      return <Route {...this.props} component={renderComponent} render={undefined} />;
    } else {
      return <Route {...this.props} />;
    }
  }
}
ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default ProtectedRoute;
