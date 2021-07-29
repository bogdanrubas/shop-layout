import React from 'react';
import { SortingOptionsWrapper, Toggle, Dropdown, DropdownElement } from './styles';

const Sorting = (props) => {
  const {
    // data:
    sortingTypes,
    // funkcje:
    appear,
    setSortingOption,
    toggleSortingDropdown,
    // state:
    shouldSortingDropdownShow,
    chosenSortingType,
  } = props;

  const dropdownElements = sortingTypes.map((element, i) => (
    <DropdownElement
      key={i}
      onClick={() => setSortingOption(i)}
      delay={i * 50 + 50}
      pose={ shouldSortingDropdownShow ? "show" : "hide" }
      active={chosenSortingType === i ? true : false}>
      {element.name}
    </DropdownElement>
  ));

  return (
    <SortingOptionsWrapper appear={appear}>
      <Toggle
        dropdownShow={shouldSortingDropdownShow}
        onClick={toggleSortingDropdown}>
        Sortuj według
        <svg viewBox="0 0 1000 1000">
          <path d="M37,270l463,463 M631,607l339.5-339.5" />
        </svg>
      </Toggle>

      <Dropdown pose={ shouldSortingDropdownShow ? "open" : "close" }>
        {dropdownElements}
      </Dropdown>
    </SortingOptionsWrapper>
  );
}

export default Sorting;
