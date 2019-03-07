import React from 'react';
import PropTypes from 'prop-types';


import { Card ,CardTitle} from 'reactstrap';

class NewsCards extends React.Component {
  render() {
    return <Card>
      <CardTitle>
        {this.props.newsData.title || "Card Title"}
      </CardTitle>
    </Card>;
  }
}

NewsCards.propTypes = {
  newsData: PropTypes.object
}

export default NewsCards;
