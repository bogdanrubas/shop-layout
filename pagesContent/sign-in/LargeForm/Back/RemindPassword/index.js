import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  Description,
  InputAnimation,
  ButtonAnimation,
} from './styles';
import Input from '../../../../../layout/Input';
import Button from '../../../../../layout/Button';

const RemindPassword = props => {
  const {
    // state:
    shouldShow,
    // funkcje:
    openSignIn,
  } = props;

  return (
    <Wrapper toggleAnimation={shouldShow}>
      <Title toggleAnimation={shouldShow}>Przypomnij hasło</Title>

      <Description toggleAnimation={shouldShow}>
        Podaj nam swój e-mail.
        <br />
        Wyślemy Ci link do zmiany hasła.
      </Description>

      <InputAnimation toggleAnimation={shouldShow}>
        <Input type="text" placeholder="Podaj swój e-mail" label="E-mail" />
      </InputAnimation>

      <ButtonAnimation toggleAnimation={shouldShow}>
        <Button
          onClick={e => openSignIn(e)}
          style={{ margin: '15px 0 0 0' }}
          value="Wyślij"
        />
      </ButtonAnimation>
    </Wrapper>
  );
};

RemindPassword.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  openSignIn: PropTypes.func.isRequired,
};

export default RemindPassword;
