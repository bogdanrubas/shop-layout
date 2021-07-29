import React, { Component, Fragment } from 'react';
import {
  Wrapper,
  Title,
  LeftArrow,
  RightArrow,
  ProductsContainer,
} from './styles';
import Product from 'layout/Product';
import products from '../../../data/products.json';

class SimilarProducts extends Component {
  constructor() {
    super();
    this.productsContainer = React.createRef();

    this.state = {
      scrollLeft: 0,
      scrollWidth: undefined,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.setState({
      scrollWidth:
        this.productsContainer.current.scrollWidth - window.innerWidth,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  renderPagination = () => {};

  resize = () => {
    this.forceUpdate();
    this.setState({
      scrollWidth:
        this.productsContainer.current.scrollWidth - window.innerWidth,
    });
  };

  slideLeft = () => {
    const { scrollLeft } = this.state;

    if (scrollLeft - window.innerWidth / 2 > 0) {
      this.setState({
        scrollLeft:
          scrollLeft -
          (window.innerWidth / 2 < 350 ? 350 : window.innerWidth / 2),
      });
    } else {
      this.setState({
        scrollLeft: 0,
      });
    }

    setTimeout(() => {
      this.productsContainer.current.scrollTo({
        left: this.state.scrollLeft,
        behavior: 'smooth',
      });
    }, 10);
  };

  slideRight = () => {
    const { scrollLeft, scrollWidth } = this.state;

    if (scrollLeft + window.innerWidth / 2 < scrollWidth) {
      this.setState({
        scrollLeft:
          scrollLeft +
          (window.innerWidth / 2 < 350 ? 350 : window.innerWidth / 2),
      });
    } else {
      this.setState({
        scrollLeft: scrollWidth,
      });
    }

    setTimeout(() => {
      this.productsContainer.current.scrollTo({
        left: this.state.scrollLeft,
        behavior: 'smooth',
      });
    }, 10);
  };

  scrollHandler = () => {
    this.setState({
      scrollLeft: this.productsContainer.current.scrollLeft,
    });
  };

  render() {
    const { scrollLeft, scrollWidth } = this.state;

    return (
      <Wrapper>
        <Title>Podobne produkty</Title>

        <LeftArrow onClick={this.slideLeft} show={scrollLeft !== 0}>
          <svg viewBox="-200 0 1000 1000">
            <path d="M510.6,10.6l-500,500 M510.6,1010.6L174.1,674.1" />
          </svg>
        </LeftArrow>

        <RightArrow onClick={this.slideRight} show={scrollLeft !== scrollWidth}>
          <svg viewBox="-250 0 1000 1000">
            <path d="M510.6,510.6l-500-500 M347.1,674.1L10.6,1010.6" />
          </svg>
        </RightArrow>

        <ProductsContainer
          onScroll={this.scrollHandler}
          ref={this.productsContainer}
        >
          {products.map((product, i) => (
            <Product
              key={i}
              name={product.name}
              brand={product.brand}
              price={product.price}
              productColors={product.productColors}
            />
          ))}
        </ProductsContainer>
      </Wrapper>
    );
  }
}

export default SimilarProducts;
