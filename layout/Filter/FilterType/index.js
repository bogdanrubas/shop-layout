import React from 'react';
import { TypeWrapper, Toggle, Dropdown } from './styles';

const FilterType = (props) => {
  const {
    // funkcje:
    filterToggle,
    animation,
    appear,
    // content:
    filterLabel,
    filterElements,
    // state:
    dropdownShow
  } = props;

  return (
    <TypeWrapper
      animation={animation}
      appear={appear}>
      <Toggle dropdownShow={dropdownShow} onClick={filterToggle}>
        {filterLabel}
        <svg viewBox="0 0 1000 1000">
          <path d="M37,270l463,463 M631,607l339.5-339.5" />
        </svg>
      </Toggle>

      <Dropdown key="dropdown" withParent={false} pose={dropdownShow ? "opened" : "closed"}>
        {filterElements}
      </Dropdown>
    </TypeWrapper>
  )
}

export default FilterType;
