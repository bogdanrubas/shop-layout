import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  Small,
  InputAnimation,
  ButtonAnimation,
  SmallAnimation,
} from './styles';
import Input from '../../../../../layout/Input';
import Button from '../../../../../layout/Button';

export default class SignIn extends Component {
  static propTypes = {
    shouldShow: PropTypes.bool.isRequired,
    openRemindPassword: PropTypes.func.isRequired,
    openSignUp: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const {
      // state:
      shouldShow,
      // funkcje:
      openRemindPassword,
      openSignUp,
    } = this.props;

    return (
      <Wrapper shouldShow={shouldShow}>
        <Title toggleAnimation={shouldShow}>Logowanie</Title>

        <InputAnimation
          toggleAnimation={shouldShow}
          delay={shouldShow ? 680 : 0}
        >
          <Input
            handleChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Podaj swój e-mail"
            label="E-mail"
          />
        </InputAnimation>

        <InputAnimation
          toggleAnimation={shouldShow}
          delay={shouldShow ? 710 : 0}
        >
          <Input
            handleChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Podaj swoje hasło"
            label="Hasło"
          />
        </InputAnimation>

        <ButtonAnimation toggleAnimation={shouldShow}>
          <Button
            onClick={e => {
              e.preventDefault();
            }}
            style={{ margin: '15px 0 0 0' }}
            value="Zaloguj się"
          />
        </ButtonAnimation>

        <SmallAnimation
          toggleAnimation={shouldShow}
          delay={shouldShow ? 770 : 0}
        >
          <Small>
            Nie pamiętasz hasła?
            <b onClick={() => openRemindPassword()}>Przypomnij je.</b>
          </Small>
        </SmallAnimation>

        <SmallAnimation
          toggleAnimation={shouldShow}
          delay={shouldShow ? 800 : 0}
        >
          <Small>
            Nie masz konta?
            <b onClick={() => openSignUp()}>Zarejestruj się.</b>
          </Small>
        </SmallAnimation>
      </Wrapper>
    );
  }
}
