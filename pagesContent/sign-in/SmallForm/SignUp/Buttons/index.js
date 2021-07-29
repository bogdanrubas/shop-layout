import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsWrapper, ButtonAnimation } from './styles';
import Button from '../../../../../layout/Button';

const Buttons = props => {
  const {
    // funkcje:
    nextForm,
    previousForm,
    // state:
    signUpActualForm,
  } = props;

  return (
    <ButtonsWrapper>
      <ButtonAnimation pose={signUpActualForm === 1 ? 'left' : 'show'}>
        <Button onClick={() => previousForm()} value="Cofnij" type="gray" />
      </ButtonAnimation>

      <ButtonAnimation>
        <Button onClick={() => nextForm()} value="Dalej" />
      </ButtonAnimation>
    </ButtonsWrapper>
  );
};

Buttons.propTypes = {
  // funkcja pokazujaca nastepny etap rejestracji
  nextForm: PropTypes.func.isRequired,
  // funkcja pokazujaca poprzedni etap rejestracji
  previousForm: PropTypes.func.isRequired,
  // aktualny etap rejestracji
  signUpActualForm: PropTypes.number.isRequired,
};

export default Buttons;
