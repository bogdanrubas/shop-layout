import React, { Component } from 'react';
import { SearchBarWrapper, Button, Clear } from './styles';
import Close from '../../../assets/icons/Close';
import { theme } from '../../../config/theme';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      inputFocus: false,
      shouldClearShow: false
    }
  }

  inputFocusTrue = () => {
    this.setState({
      inputFocus: true,
    });
    console.log(this.state.inputFocus)
  }

  inputFocusFalse = () => {
    this.setState({
      inputFocus: false,
    });
  }

  clearInputValue = () => {
    this.searchInput.value = "";

    this.setState({
      shouldClearShow: false
    })
  }

  shouldClearShow = () => {
    if (this.searchInput.value.length > 0) {
      this.setState({
        shouldClearShow: true
      })
    }

    else {
      this.setState({
        shouldClearShow: false
      })
    }
  }

  render() {
    const {
      // state:
      shouldClearShow,
    } = this.state;

    const {
      // funkcje:
      animation,
      appear
    } = this.props;

    return (
      <SearchBarWrapper
        animation={animation}
        appear={appear}>
        <Button>
          <svg viewBox="0 0 1000 1000">
            <path d="M898.5,907.5 M754.3,602.5c7.9-15.6,14.6-31.8,20-48.4c27.2-83.2,22.6-176.8-20.2-261C668.6,124.7,462.7,57.4,294.3,143S58.6,434.4,144.1,602.8S435.5,838.5,604,753c24.7-12.6,47.3-27.7,67.5-44.9 M861.9,898.7l-191-191"/>
          </svg>
        </Button>

        <input
          type="text"
          placeholder="Szukaj produktu..."
          onChange={this.shouldClearShow}
          onFocus={this.inputFocusTrue}
          onBlur={this.inputFocusFalse}
          ref={el => this.searchInput = el}
        />

        <Clear
          onClick={this.clearInputValue}
          style={{
            opacity: shouldClearShow ? 1 : 0,
            pointerEvents: shouldClearShow ? "all" : "none",
            transform: shouldClearShow ? "scale(1)" : "scale(0.5)"
          }}>
          <Close
            styles={{
              size: 12,
              color: theme.colors.lightAccentTextColor,
              strokeWidth: 45
            }}
          />
        </Clear>
      </SearchBarWrapper>
    )
  }
}

export default SearchBar;
