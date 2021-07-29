import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Wrapper, Container, Title, Description, Button, Price } from './styles';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  animation = (i) => {
    const {
      actualSlide,
      quantityOfSlides
    } = this.props;

    var transform;

    if (i === 0 && actualSlide === quantityOfSlides) {
      transform = "translateX(-40vw)";
    }

    else if (i === quantityOfSlides && actualSlide === 0) {
      transform = "translateX(45vw)";
    }

    else if (i < actualSlide) {
      transform = "translateX(45vw)";
    }

    else if (i > actualSlide) {
      transform = "translateX(-40vw)";
    }

    else if (i === actualSlide) {
      transform = "translateX(0vw)";
    }


    return {
      transform: transform,
      opacity: actualSlide === i ? 1 : 0
    }
  }

  // obliczanie maksymalnej wysokosci dla content -> <Container /> i przekazanie tej wartosci
  // do rodzica, aby ustawic ja w WrapperStyles -> grid-template-rows: auto {maxValue}; dla telefonow
  getContainerMaxHeight = () => {
    const {
      slides,
      getMaxHeight
    } = this.props;

    var maxHeight = 0;

    slides.forEach((slide, i) => {
      var node = ReactDOM.findDOMNode(this.refs['contentWrapper' + i]);
      if (node) {
        var wrapperHeight = node.clientHeight;
        if (wrapperHeight > maxHeight) {
          maxHeight = wrapperHeight
        }
      }
    });

    getMaxHeight(maxHeight);
  }


  componentDidMount() {
    window.addEventListener("resize", this.getContainerMaxHeight);
    this.getContainerMaxHeight();
  }

  render() {
    const {
      // content:
      slides,
      // state:
      actualSlide
    } = this.props;

    const content = slides.map((slide, i) => (
      <Container
        key={i}
        actualSlide={actualSlide === i ? true : false}>
        <div ref={'contentWrapper' + i}>
          <Title
            delay={actualSlide === i ? 250 : 0}
            style={this.animation(i)}>
            {slide.title}
          </Title>

          <Description
            delay={actualSlide === i ? 350 : 100}
            style={this.animation(i)}>
            {slide.description}
            <Button>Pokaż produkt</Button>
          </Description>

          <Price
            delay={actualSlide === i ? 400 : 180}
            style={this.animation(i)}>
            {slide.price}<small>zł</small>
          </Price>
        </div>
      </Container>
    ));

    return (
      <Wrapper>
        {content}
      </Wrapper>
    )
  }
}

export default Info;
