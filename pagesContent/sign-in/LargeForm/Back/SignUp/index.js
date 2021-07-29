import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Form from './Form';
import Tip from './Tip';

const SignUp = props => {
  const {
    // state:
    shouldShow,
    signUpActualForm,
    // funkcje:
    openDefault,
    nextForm,
    previousForm,
    // data:
    signUpInfoData,
  } = props;

  return (
    <Wrapper shouldShow={shouldShow}>
      <Form
        shouldShow={shouldShow}
        openDefault={openDefault}
        signUpInfoData={signUpInfoData}
        nextForm={nextForm}
        previousForm={previousForm}
        signUpActualForm={signUpActualForm}
      />

      <Tip
        shouldShow={shouldShow}
        signUpInfoData={signUpInfoData}
        signUpActualForm={signUpActualForm}
      />
    </Wrapper>
  );
};

SignUp.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  openDefault: PropTypes.func.isRequired,
  signUpInfoData: PropTypes.array.isRequired,
  nextForm: PropTypes.func.isRequired,
  previousForm: PropTypes.func.isRequired,
  signUpActualForm: PropTypes.number.isRequired,
};

export default SignUp;
