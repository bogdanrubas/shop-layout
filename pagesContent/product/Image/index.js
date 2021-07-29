import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  BigImage,
  Pagination,
  Arrow,
  Nav,
  Circle,
  SmallImages,
  SmallImage,
} from './styles';

const Image = props => {
  const {
    product,
    actualImage,
    actualColor,
    quantityOfImages,
    nextImage,
    previousImage,
    setImage,
    changeColor,
  } = props;

  function imageAnimation(i) {
    let left;

    if (quantityOfImages > 2) {
      if (i === 0 && actualImage === quantityOfImages - 1) {
        left = '100%';
      } else if (i === quantityOfImages - 1 && actualImage === 0) {
        left = '-100%';
      } else if (i < actualImage) {
        left = '-100%';
      } else if (i > actualImage) {
        left = '100%';
      } else if (i === actualImage) {
        left = '0%';
      }

      return {
        transform: `translate(${left}, -50%)`,
        opacity: actualImage === i ? 1 : 0,
      };
    }

    if (i === previousImage && previousImage === 0 && actualImage === 1) {
      left = '-100%';
    } else if (i === actualImage) {
      left = '0%';
    } else {
      left = '100%';
    }

    return {
      transform: `translate(${left}, -50%)`,
      opacity: actualImage === i ? 1 : 0,
    };
  }

  return (
    <Wrapper>
      <BigImage>
        {product.productColors[actualColor].imagesUrl.map((image, i) => (
          <img key={i} style={imageAnimation(i)} src={image.imgUrl} alt={i} />
        ))}

        {quantityOfImages > 1 ? (
          <Pagination>
            <Arrow onClick={e => previousImage()}>
              <svg viewBox="-200 0 1000 1000">
                <path d="M510.6,10.6l-500,500 M510.6,1010.6L174.1,674.1" />
              </svg>
            </Arrow>

            <Nav>
              {product.productColors[actualColor].imagesUrl.map((image, i) => (
                <Circle key={i} onClick={e => setImage(i)} actual={actualImage === i} />
              ))}
            </Nav>

            <Arrow onClick={e => nextImage()}>
              <svg viewBox="-250 0 1000 1000">
                <path d="M510.6,510.6l-500-500 M347.1,674.1L10.6,1010.6" />
              </svg>
            </Arrow>
          </Pagination>
        ) : null}
      </BigImage>

      <SmallImages>
        {product.productColors.map((image, i) => (
          <SmallImage index={i} chosen={actualColor === i} key={i}>
            <img
              onClick={e => changeColor(i)}
              src={image.imagesUrl[0].imgUrl}
              alt={i}
            />
          </SmallImage>
        ))}
      </SmallImages>
    </Wrapper>
  );
};

Image.propTypes = {
  product: PropTypes.object.isRequired,
  actualImage: PropTypes.number.isRequired,
  actualColor: PropTypes.number.isRequired,
  quantityOfImages: PropTypes.number.isRequired,
  nextImage: PropTypes.func.isRequired,
  previousImage: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
};

export default Image;
