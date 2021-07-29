import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Products from './Products';
import { Wrapper } from './styles';

export default class Order extends Component {
  static propTypes = {
    order: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      moreInfo: false,
    };
  }

  toggleShowMore = () => {
    const { moreInfo } = this.state;

    this.setState({
      moreInfo: !moreInfo,
    });
  };

  render() {
    const { order } = this.props;

    const { moreInfo } = this.state;

    return (
      <Wrapper pose={moreInfo ? 'more' : 'less'} moreInfo={moreInfo}>
        <Info
          moreInfo={moreInfo}
          toggleShowMore={this.toggleShowMore}
          order={order}
        />

        <Products moreInfo={moreInfo} products={order.products} />
      </Wrapper>
    );
  }
}
