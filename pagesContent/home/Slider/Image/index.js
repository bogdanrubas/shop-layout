import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImageContainer } from './styles';

const Image = props => {
  const {
    // content:
    slides,
  } = props;

  function imageAnimation(i) {
    const { actualSlide, quantityOfSlides } = props;

    let transform;

    if (i === 0 && actualSlide === quantityOfSlides) {
      transform = 'translateY(100%)';
    } else if (i === quantityOfSlides && actualSlide === 0) {
      transform = 'translateY(-100%)';
    } else if (i < actualSlide) {
      transform = 'translateY(-100%)';
    } else if (i > actualSlide) {
      transform = 'translateY(100%)';
    } else if (i === actualSlide) {
      transform = 'translateY(0%)';
    }

    return {
      opacity: actualSlide === i ? 1 : 0,
      transform,
    };
  }

  const image = slides.map((slide, i) => (
    <img key={i} style={imageAnimation(i)} src={slide.imgUrl} alt="img" />
  ));

  return (
    <Wrapper>
      <ImageContainer>{image}</ImageContainer>
    </Wrapper>
  );
};

Image.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Image;
