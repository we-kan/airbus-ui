import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardTitle } from 'reactstrap';
import API from '../api';
import NewsCards from '../components/NewsCards';
import { observer, inject } from 'mobx-react';

@inject('dataStore')
@observer
class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    this.props.dataStore.pageLoading = true;
    const res = await API.get('/news/news/');
    const newsData = res.data;
    this.props.dataStore.pageLoading = false;
    this.setState({ ...this.state, data: newsData });
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <h1>Feed</h1>
          </Col>
          {(this.state.data &&
            this.state.data.map(item => (
              <Col key={item.id} md={{ size: 6 }}>
                <NewsCards newsData={item} />
              </Col>
            ))) || <Col md={12}>No data.</Col>}
        </Row>
      </div>
    );
  }
}
Feed.propTypes = {
  dataStore: PropTypes.object
};
export default Feed;
