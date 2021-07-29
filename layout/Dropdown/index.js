import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  DropdownContainer,
  DropdownElement,
  DropdownContent,
} from './styles';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantityOfElements: undefined,
      dropdownElementAnimationDelay: undefined,
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const { quantityOfElements } = this.state;

    this.setState({
      quantityOfElements: data.content.length,
    });

    setTimeout(() => {
      this.setState({
        dropdownElementAnimationDelay: 300 / (quantityOfElements - 1),
      });
    }, 100);
  }

  render() {
    const {
      // content:
      data,
      // funkcje:
      toggleDropdown,
      chooseDropdownElement,
    } = this.props;

    const { dropdownElementAnimationDelay } = this.state;

    return (
      <Wrapper>
        <Title dropdownShow={data.show} onClick={e => toggleDropdown()}>
          {data.title}

          <svg viewBox="0 0 1000 1000">
            <path d="M37,270l463,463 M631,607l339.5-339.5" />
          </svg>
        </Title>

        <DropdownContainer pose={data.show ? 'show' : 'hide'}>
          <div style={{ paddingBottom: 20, paddingTop: 5 }}>
            {data.selectable ? (
              data.content.map((item, i) => (
                <DropdownElement
                  key={i}
                  index={i}
                  dropdownElementAnimationDelay={dropdownElementAnimationDelay}
                  dropdownShow={data.show}
                  available={
                    item.available !== undefined ? item.available : null
                  }
                  chosen={item.chosen}
                  onClick={
                    item.available !== false
                      ? () => chooseDropdownElement(i)
                      : null
                  }
                >
                  {item.value}
                </DropdownElement>
              ))
            ) : (
              <DropdownContent dropdownShow={data.show}>
                {data.content}
              </DropdownContent>
            )}
          </div>
        </DropdownContainer>
      </Wrapper>
    );
  }
}

Dropdown.propTypes = {
  // funkcja odpowiadającą za rozwinięcie/zwinięcie dropdown'a
  toggleDropdown: PropTypes.func.isRequired,
  // zawartość dropdown'a"
  data: PropTypes.any,
  // funkcje odpowiadajaca za klikniecie na element dropdown'a:
  chooseDropdownElement: PropTypes.func,
};

export default Dropdown;
