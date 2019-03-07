import React from 'react';
import PropTypes from 'prop-types';

import { FaAnchor } from 'react-icons/fa';
import { Card, CardTitle } from 'reactstrap';

class NewsCards extends React.Component {
  render() {
    return (
      <div>
        <Card inverse className="bg-secondary" style={{ marginTop: '20px' }} body>
          <FaAnchor size={40} />
          <CardTitle>{this.props.newsData.title || 'Card Title'}</CardTitle>
        </Card>
      </div>
    );
  }
}

NewsCards.propTypes = {
  newsData: PropTypes.object
};

export default NewsCards;
