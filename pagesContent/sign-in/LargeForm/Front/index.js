import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Column, Icon, ListElement, ButtonAnimation } from './styles';
import Button from '../../../../layout/Button';

class Front extends Component {
  static propTypes = {
    openSignIn: PropTypes.func.isRequired,
    openSignUp: PropTypes.func.isRequired,
    shouldFlip: PropTypes.bool,
  };

  constructor() {
    super();

    this.state = {
      // signIn:
      signInHover: false,
      signInList: [
        {
          item: 'Odbierz kody promocyjne dla stałych klientów.',
        },
        {
          item: 'Zyskaj dostęp do poprzednich zamówień.',
        },
      ],
      // signUp:
      signUpHover: false,
      signUpList: [
        {
          item: 'Rejestracja zajmie nie więcej, niż 3 minuty.',
        },
        {
          item: 'Nie wymagamy podania karty kredytowej.',
        },
      ],
    };
  }

  signInMouseEnter = () => {
    this.setState({
      signInHover: true,
    });
  };

  signInMouseLeave = () => {
    this.setState({
      signInHover: false,
    });
  };

  signUpMouseEnter = () => {
    this.setState({
      signUpHover: true,
    });
  };

  signUpMouseLeave = () => {
    this.setState({
      signUpHover: false,
    });
  };

  render() {
    const {
      // data:
      signInList,
      signUpList,
      // state:
      signInHover,
      signUpHover,
    } = this.state;

    const { openSignIn, openSignUp, shouldFlip } = this.props;

    const signInListContent = signInList.map((props, i) => (
      <ListElement key={i} shouldShow={signInHover} transitionDelay={i}>
        {props.item}
      </ListElement>
    ));

    const signUpListContent = signUpList.map((props, i) => (
      <ListElement key={i} shouldShow={signUpHover} transitionDelay={i}>
        {props.item}
      </ListElement>
    ));

    return (
      <Wrapper shouldFlip={shouldFlip}>
        <Column
          flexBasis={signUpHover ? `${30}%` : `${100}%`}
          shouldFlip={shouldFlip}
          shouldShow={signInHover}
          shouldHide={signUpHover}
          onMouseEnter={e => this.signInMouseEnter(e)}
          onMouseLeave={e => this.signInMouseLeave(e)}
        >
          <Icon />

          <h1>Zaloguj się</h1>

          <ul>{signInListContent}</ul>

          <ButtonAnimation toggleAnimation={signInHover}>
            <Button onClick={openSignIn} value="Zaloguj się" />
          </ButtonAnimation>
        </Column>

        <Column
          flexBasis={signInHover ? `${30}%` : `${100}%`}
          shouldFlip={shouldFlip}
          shouldShow={signUpHover}
          shouldHide={signInHover}
          onMouseEnter={e => this.signUpMouseEnter(e)}
          onMouseLeave={e => this.signUpMouseLeave(e)}
        >
          <Icon />

          <h2>Zarejestruj się</h2>

          <ul>{signUpListContent}</ul>

          <ButtonAnimation toggleAnimation={signUpHover}>
            <Button onClick={openSignUp} value="Zarejestruj się" />
          </ButtonAnimation>
        </Column>
      </Wrapper>
    );
  }
}

export default Front;
