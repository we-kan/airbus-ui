import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Container } from 'reactstrap';

import rootStore from './store/rootStore';
import './App.css';

import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Feed from './containers/Feed';
import Upload from './containers/Upload';

const store = new rootStore();

const authProps = {
  isAuthenticated: true
};

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <div className="page-container">
          <BrowserRouter>
            <Container fluid={true}>
              <Header />
              <Switch>
                <Route path="/" exact={true} component={Login} />
                <ProtectedRoute path="/feed" component={Feed} {...authProps} />
                <ProtectedRoute path="/dashboard" component={Dashboard} {...authProps} />
                <ProtectedRoute path="/upload-new" component={Upload} {...authProps} />
              </Switch>
            </Container>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
