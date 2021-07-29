import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  SignInWrapper,
  Container,
  Title,
  ButtonAnimation,
  Small,
} from './styles';
import Input from '../../../../layout/Input';
import Button from '../../../../layout/Button';

const SignIn = props => {
  const {
    // funkcje:
    openSignUp,
    // state:
    shouldShow,
  } = props;

  return (
    <SignInWrapper shouldShow={shouldShow}>
      <Small onClick={() => openSignUp()}>
        Nie masz konta? <b>Zarejestruj się.</b>
      </Small>

      <Container>
        <Title>Logowanie</Title>

        <Input type="text" placeholder="Podaj swój e-mail" label="E-mail" />

        <Input type="password" placeholder="Podaj swoje hasło" label="Hasło" />

        <ButtonAnimation>
          <Link href="account">
            <Button style={{ margin: '15px 0 0 0' }} value="Zaloguj się" />
          </Link>
        </ButtonAnimation>

        <Small>
          Nie pamiętasz hasła?
          <b onClick={() => openRemindPassword()}>Przypomnij je.</b>
        </Small>
      </Container>
    </SignInWrapper>
  );
};

SignIn.propTypes = {
  // funkcja otwierajaca "Rejestracje"
  openSignUp: PropTypes.func.isRequired,
  // bool odpowiadajacy czy "Logowanie" ma byc pokazane
  shouldShow: PropTypes.bool.isRequired,
};

export default SignIn;
