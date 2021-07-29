import React from 'react';
import PropTypes from 'prop-types';
import { FormsWrapper, Form } from './styles';
import Input from '../../../../../layout/Input';

const Forms = props => {
  const {
    signUpActualForm,
    // data:
    signUpInfoData,
  } = props;

  return (
    <FormsWrapper>
      {signUpInfoData.map((item, i) => (
        <Form
          key={i}
          pose={
            // eslint-disable-next-line no-nested-ternary
            signUpActualForm === i + 1
              ? 'actual'
              : signUpActualForm > i + 1
              ? 'left'
              : 'right'
          }
        >
          {item.inputs.map((input, j) => (
            <Input
              key={j}
              gridArea={input.gridArea}
              type={input.type}
              placeholder={input.placeholder}
              label={input.label}
            />
          ))}
        </Form>
      ))}
    </FormsWrapper>
  );
};

Forms.propTypes = {
  // aktualny etap rejestracji
  signUpActualForm: PropTypes.number.isRequired,
  // tablica potrzebna do wyrenderowanie "Forms"
  signUpInfoData: PropTypes.array.isRequired,
};

export default Forms;
