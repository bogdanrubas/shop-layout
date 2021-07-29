import React from 'react';
import { Wrapper, LeftColumn, RightColumn, BigText, SmallText, AvailableColors, MoreColors, MoreColorsWrapper } from './styles';

const ProductInfo = (props) => {
  const {
    // content:
    name,
    brand,
    price,
    availableColors,
    moreColors,
    // state:
    firstColor,
    secondColor,
    thirdColor,
    quantityOfColors
  } = props;

  return (
    <Wrapper>
      <LeftColumn>
        <BigText>
          {name}
        </BigText>

        <SmallText>
          {brand}
        </SmallText>
      </LeftColumn>

      <RightColumn>
        <BigText>
          {price}
        </BigText>

        <AvailableColors
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}>
          {availableColors}
        </AvailableColors>

        <MoreColors style={{
          width: quantityOfColors < 4
            ? quantityOfColors * 60 + quantityOfColors * 5 - 5
            : 190,
          display: quantityOfColors === 1
            ? "none"
            : "block" }}
        >
          <MoreColorsWrapper>
            {moreColors}
          </MoreColorsWrapper>
        </MoreColors>
      </RightColumn>
    </Wrapper>
  )
}

export default ProductInfo;
