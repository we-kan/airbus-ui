import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Container } from 'reactstrap';

import rootStore from './store/rootStore';
import './App.css';

import ProtectedRoute from './components/ProtectedRoute';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Upload from './containers/Upload';

const store = new rootStore();

const authProps = {
  isAuthenticated: true
};

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Provider {...store}>
          <BrowserRouter>
            <Container>
              <Switch>
                <Route path="/" exact={true} component={Login} />
                <ProtectedRoute path="/feed" component={Dashboard} {...authProps} />
                <ProtectedRoute path="/upload/new" component={Upload} {...authProps} />
              </Switch>
            </Container>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
