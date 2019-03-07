import React from 'react';
import PropTypes from 'prop-types';

import { FaAnchor } from 'react-icons/fa';
import { Card, CardTitle, CardText } from 'reactstrap';

class NewsCards extends React.Component {
  render() {
    return (
      <div>
        <Card inverse className="bg-secondary" style={{ marginTop: '20px' }} body>
          <FaAnchor size={40} />
          <CardTitle>{this.props.newsData.headline}</CardTitle>
          <CardText>{this.props.newsData.content}</CardText>
        </Card>
      </div>
    );
  }
}

NewsCards.propTypes = {
  newsData: PropTypes.object
};

export default NewsCards;
