import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Progress } from 'reactstrap';
import PropTypes from 'prop-types';

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Feed from './containers/Feed';
import Upload from './containers/Upload';
import { observer, inject } from 'mobx-react';

const authProps = {
  isAuthenticated: true
};

@inject('dataStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="page-container">
        <BrowserRouter>
          <Container fluid={true}>
            <Header />
            {this.props.dataStore.pageLoading && (
              <Progress animated color="info" value={100} style={{ margin: '5px', top: 100, left: 0 }} />
            )}
            <Switch>
              <Route path="/" exact={true} component={Login} />
              <ProtectedRoute path="/feed" component={Feed} {...authProps} />
              <ProtectedRoute path="/dashboard" component={Dashboard} {...authProps} />
              <ProtectedRoute path="/upload-new" component={Upload} {...authProps} />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}
App.propTypes = {
  dataStore: PropTypes.object
};

export default App;
