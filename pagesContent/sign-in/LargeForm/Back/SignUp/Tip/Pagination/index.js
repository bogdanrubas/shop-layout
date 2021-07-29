import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle } from './styles';

const Pagination = props => {
  const {
    // state:
    shouldShow,
    signUpActualForm,
    // data:
    signUpInfoData,
  } = props;

  const circles = signUpInfoData.map((circle, index) => (
    <Circle key={index} active={index + 1 === signUpActualForm}>
      {index + 1}
    </Circle>
  ));

  return <Wrapper toggleAnimation={shouldShow}>{circles}</Wrapper>;
};

Pagination.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  signUpActualForm: PropTypes.number.isRequired,
  signUpInfoData: PropTypes.array.isRequired,
};

export default Pagination;
