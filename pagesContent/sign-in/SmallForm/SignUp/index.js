import React from 'react';
import PropTypes from 'prop-types';
import { SignUpWrapper, Container, Title, Small } from './styles';
import Pagination from './Pagination';
import Forms from './Forms';
import Buttons from './Buttons';

const SignUp = props => {
  const {
    // funkcje:
    openSignIn,
    nextForm,
    previousForm,
    // state:
    shouldShow,
    signUpActualForm,
    // data:
    signUpInfoData,
  } = props;

  return (
    <SignUpWrapper shouldShow={shouldShow}>
      <Small onClick={() => openSignIn()}>
        Masz już konto? <b>Zaloguj się.</b>
      </Small>

      <Container>
        <Title>Rejestracja</Title>

        <Pagination
          signUpActualForm={signUpActualForm}
          signUpInfoData={signUpInfoData}
          shouldShow={shouldShow}
        />

        <Forms
          signUpActualForm={signUpActualForm}
          signUpInfoData={signUpInfoData}
          nextForm={nextForm}
          previousForm={previousForm}
        />

        <Buttons
          nextForm={nextForm}
          previousForm={previousForm}
          signUpActualForm={signUpActualForm}
        />
      </Container>
    </SignUpWrapper>
  );
};

SignUp.propTypes = {
  // funkcja otwierajaca "Logowanie"
  openSignIn: PropTypes.func.isRequired,
  // funkcja pokazujaca nastepny etap rejestracji
  nextForm: PropTypes.func.isRequired,
  // funkcja pokazujaca poprzedni etap rejestracji
  previousForm: PropTypes.func.isRequired,
  // bool odpowiadajacy czy "Rejestracja" ma byc pokazana
  shouldShow: PropTypes.bool.isRequired,
  // aktualny etap rejestracji
  signUpActualForm: PropTypes.number.isRequired,
  // tablica z inputami, opisem etapu rejestracji itd.
  signUpInfoData: PropTypes.array.isRequired,
};

export default SignUp;
