import React from 'react';
import Link from 'next/link';
import { ImageWrapper, Image, Pagination, Arrow, Nav } from './styles';

const ProductImage = (props) => {
  const {
    // funkcje:
    previousImage,
    nextImage,
    // content:
    pagination,
    bigImage,
    // state:
    quantityOfImages
  } = props;

  return (
    <ImageWrapper>
      <Link href="/product">
        <a>
        <Image>
          {bigImage}
        </Image>
        </a>
      </Link>

      {quantityOfImages > 1 ?
        <Pagination>
          <Arrow onClick={() => previousImage()}>
            <svg viewBox="-200 0 1000 1000">
              <path d="M510.6,10.6l-500,500 M510.6,1010.6L174.1,674.1"/>
            </svg>
          </Arrow>

          <Nav>
            {pagination}
          </Nav>

          <Arrow onClick={() => nextImage()}>
            <svg viewBox="-250 0 1000 1000">
              <path d="M510.6,510.6l-500-500 M347.1,674.1L10.6,1010.6"/>
            </svg>
          </Arrow>
        </Pagination>

        : null
      }
    </ImageWrapper>
  )
}

export default ProductImage;
