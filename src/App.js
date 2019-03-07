import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Container } from 'reactstrap';
import rootStore from './store/rootStore';
import './App.css';
import Login from './containers/Login';

const store = new rootStore();

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Provider {...store}>
          <BrowserRouter>
            <Container>
              <Login />
            </Container>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
