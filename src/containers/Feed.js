import React, { Component } from 'react';

import { Row, Col, Card, CardTitle } from 'reactstrap';
import NewsCards from '../components/NewsCards';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.newsData = {
      title: 'Dummy headline'
    };
  }
  render() {
    return (
      <div>
        <h1>Feed</h1>
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
            <NewsCards newsData={this.newsData} />
          </Col>
          <Col md={{ size: 5, offset: 1 }}>
            <NewsCards newsData={this.newsData} />
          </Col>

          <Col md={{ size: 5, offset: 1 }}>
            <NewsCards newsData={this.newsData} />
          </Col>
          <Col md={{ size: 5, offset: 1 }}>
            <NewsCards newsData={this.newsData} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Feed;
