import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  InputsContainer,
  ButtonsContainer,
  ButtonAnimation,
} from './styles';
import Input from '../../../../../../layout/Input';
import Button from '../../../../../../layout/Button';

export default class Form extends Component {
  static propTypes = {
    shouldShow: PropTypes.bool.isRequired,
    signUpActualForm: PropTypes.number.isRequired,
    signUpInfoData: PropTypes.array.isRequired,
    previousForm: PropTypes.func.isRequired,
    nextForm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { signUpInfoData } = this.props;

    // tworzenie state dla inputow:
    signUpInfoData.map((form, i) => {
      form.inputs.map((input, j) => {
        if (input.gridArea !== 'verification') {
          this.setState({
            [input.gridArea]: '',
          });
        }

        return null;
      });

      return null;
    });
  }

  getInputsContainerStyles = i => {
    const { signUpActualForm } = this.props;

    let transform;

    if (i + 1 === signUpActualForm) {
      transform = 'translateX(0px)';
    } else if (i + 1 < signUpActualForm) {
      transform = 'translateX(-500px)';
    } else if (i + 1 > signUpActualForm) {
      transform = 'translateX(500px)';
    }

    return {
      transform,
    };
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

    console.log(this.state);
  };

  handleErrors = () => {
    const { nextForm, signUpActualForm, signUpInfoData } = this.props;
    const {
      email,
      repeatEmail,
      password,
      repeatPassword,
      phoneNumber,
      cardNumber,
      expirationDate,
    } = this.state;

    let formCompleted = true;

    signUpInfoData[signUpActualForm - 1].inputs.map((input, i) => {
      if (this.state[input.gridArea] !== '' && formCompleted === true) {
        formCompleted = true;
      } else {
        formCompleted = false;
      }

      return null;
    });
    nextForm();
  };

  render() {
    const {
      // state:
      shouldShow,
      signUpActualForm,
      // data:
      signUpInfoData,
      // funkcje:
      previousForm,
    } = this.props;

    const inputs = signUpInfoData.map((form, i) => (
      <InputsContainer
        toggleAnimation={shouldShow}
        style={this.getInputsContainerStyles(i)}
        actual={i + 1 === signUpActualForm}
        key={i}
        gridAreaTemplates={form.gridAreaTemplates}
      >
        {form.inputs.map((input, j) => (
          <Input
            key={`${j}.${i}`}
            value={this.state[input.gridArea]}
            handleChange={event =>
              this.setState({ [input.gridArea]: event.target.value })
            }
            gridArea={input.gridArea}
            type={input.type}
            placeholder={input.placeholder}
            label={input.label}
          />
        ))}
      </InputsContainer>
    ));

    return (
      <Wrapper shouldShow={shouldShow}>
        <Title toggleAnimation={shouldShow}>Rejestracja</Title>

        {inputs}

        <ButtonsContainer>
          <ButtonAnimation
            gridArea="previous"
            toggleAnimation={shouldShow}
            delay={shouldShow ? 620 : 0}
          >
            <Button type="gray" onClick={previousForm} value="Cofnij" />
          </ButtonAnimation>

          <ButtonAnimation
            gridArea="next"
            toggleAnimation={shouldShow}
            delay={shouldShow ? 620 : 0}
          >
                <div
                >
                  <Button onClick={() => this.handleErrors()} value="Dalej" />
                </div>
          </ButtonAnimation>
        </ButtonsContainer>
      </Wrapper>
    );
  }
}
