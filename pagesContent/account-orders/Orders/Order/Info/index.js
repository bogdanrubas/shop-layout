import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Date, Value } from './styles';
import Chevron from '../../../../../assets/icons/Chevron';
import { theme } from '../../../../../config/theme';

const Info = props => {
  const {
    // data:
    order,
    // state:
    moreInfo,
    // funkcje:
    toggleShowMore,
  } = props;

  return (
    <Wrapper onClick={toggleShowMore} moreInfo={moreInfo}>
      <Date>{order.date}</Date>

      <Value>{order.value} zł</Value>

      <Chevron
        styles={{
          size: 18,
          strokeWidth: 40,
          color: theme.colors.text.normal,
        }}
      />
    </Wrapper>
  );
};

Info.propTypes = {
  order: PropTypes.object.isRequired,
  moreInfo: PropTypes.bool.isRequired,
  toggleShowMore: PropTypes.func.isRequired,
};

export default Info;
