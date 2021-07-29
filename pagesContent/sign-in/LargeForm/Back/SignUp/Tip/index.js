import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Pagination from './Pagination';
import Info from './Info';

const Tip = props => {
  const {
    // state:
    shouldShow,
    signUpActualForm,
    // data:
    signUpInfoData,
  } = props;

  return (
    <Wrapper shouldShow={shouldShow}>
      <Pagination
        shouldShow={shouldShow}
        signUpInfoData={signUpInfoData}
        signUpActualForm={signUpActualForm}
      />

      <Info
        shouldShow={shouldShow}
        signUpInfoData={signUpInfoData}
        signUpActualForm={signUpActualForm}
      />
    </Wrapper>
  );
};

Tip.propTypes = {
  shouldShow: PropTypes.bool,
  signUpActualForm: PropTypes.number.isRequired,
  signUpInfoData: PropTypes.array.isRequired,
};

export default Tip;
