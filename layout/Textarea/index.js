import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TextareaWrapper, TextareaField, Label } from './styles';

class textarea extends Component {
  constructor() {
    super();

    this.state = {
      textareaFocus: false,
    };
  }

  componentDidMount() {}

  onFocus = () => {
    this.textareaRef.focus();

    this.setState({
      textareaFocus: true,
    });
  };

  onBlur = () => {
    this.setState({
      textareaFocus: false,
    });
  };

  render() {
    const {
      // content:
      placeholder,
      label,
      // state:
      value,
      gridArea,
      style,
      // funkcje:
      handleChange,
    } = this.props;

    const { textareaFocus } = this.state;

    return (
      <Wrapper
        style={style}
        // funkcje:
        onClick={this.onFocus}
        // styled-components:
        gridArea={gridArea}
        focus={textareaFocus}
      >
        <TextareaWrapper>
          <Label
            focus={textareaFocus}
            ref={labelRef => (this.labelRef = labelRef)}
          >
            {label}
          </Label>

          <TextareaField
            // funkcje:
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onChange={handleChange}
            // textarea:
            value={value}
            placeholder={placeholder}
            ref={textareaRef => (this.textareaRef = textareaRef)}
            // styled-components:
            focus={textareaFocus}
          />
        </TextareaWrapper>
      </Wrapper>
    );
  }
}

textarea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  gridArea: PropTypes.string,
  style: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default textarea;
