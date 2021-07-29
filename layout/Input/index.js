import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { theme } from '../../config/theme';
import {
  DefaultInputWrapper,
  InputWrap,
  InputField,
  Label,
  AddInputWrapper,
  AddButton,
} from './styles';

class Input extends Component {
  constructor() {
    super();

    this.state = {
      inputFocus: false,
      transformValue: undefined,
    };
  }

  componentDidMount() {
    const labelWidth = parseFloat(
      this.labelRef.getBoundingClientRect().width + 10
    );

    this.setState({
      transformValue: labelWidth,
    });
  }

  onFocus = () => {
    this.input.focus();

    this.setState({
      inputFocus: true,
      transformValue: 10,
    });
  };

  onBlur = () => {
    let labelWidth;

    if (this.labelRef !== undefined) {
      labelWidth = parseFloat(this.labelRef.getBoundingClientRect().width);
    }

    this.setState({
      inputFocus: false,
      transformValue: labelWidth,
    });
  };

  renderInput = type => {
    const {
      onClick,
      inputType,
      placeholder,
      label,
      value,
      gridArea,
      style,
      handleChange,
    } = this.props;
    const { inputFocus, transformValue } = this.state;

    switch (type) {
      case 'add':
        return (
          <AddInputWrapper>
            <InputWrap onClick={this.onFocus} transform={transformValue}>
              <InputField
                // funkcje:
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onChange={handleChange}
                // input:
                inputType={inputType}
                value={value}
                placeholder={placeholder}
                ref={input => (this.input = input)}
                // styled-components:
                focus={inputFocus}
              />
            </InputWrap>

            <Label
              onClick={this.onFocus}
              focus={inputFocus}
              ref={labelRef => (this.labelRef = labelRef)}
            >
              {label}
            </Label>

            <AddButton onClick={onClick}>
              <Icon
                name="plus"
                size={15}
                strokeWidth={70}
                color={theme.colors.lightNormalTextColor}
              />
            </AddButton>
          </AddInputWrapper>
        );

      default:
        return (
          <DefaultInputWrapper
            style={style}
            // funkcje:
            onClick={this.onFocus}
            // styled-components:
            gridArea={gridArea}
            focus={inputFocus}
          >
            <InputWrap transform={transformValue}>
              <InputField
                // funkcje:
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onChange={handleChange}
                // input:
                inputType={inputType}
                value={value}
                placeholder={placeholder}
                ref={input => (this.input = input)}
                // styled-components:
                focus={inputFocus}
              />
            </InputWrap>

            <Label
              focus={inputFocus}
              ref={labelRef => (this.labelRef = labelRef)}
            >
              {label}
            </Label>
          </DefaultInputWrapper>
        );
    }
  };

  render() {
    const { type } = this.props;

    return this.renderInput(type);
  }
}

Input.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  gridArea: PropTypes.string,
  style: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
