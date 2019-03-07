import React, { Component } from 'react';

import { Row, Col, Card, CardTitle } from 'reactstrap';
import NewsCards from '../components/NewsCards';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        id: 0,
        title: 'Dummy headline'
      },
      {
        id: 1,
        title: 'Dummy 2'
      }
    ];
  }
  render() {
    return (
      <div>
        <h1>Feed</h1>
        <Row>
          {this.data.map(item => (
            <Col key={item.id} md={{ size: 6 }}>
              <NewsCards newsData={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Feed;
