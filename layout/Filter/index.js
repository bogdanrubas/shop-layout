import React, { Component } from 'react';
import {
  FilterWrapper,
  Title,
  ToggleFilter,
  MobileFilterTypesWrapper,
  SortingMobile,
  DesktopHeader,
} from './styles';
import { Toggle, FilterTypeElement } from './FilterType/styles';
import { theme } from '../../config/theme';
import SearchBar from './SearchBar';
import FilterType from './FilterType';
import Sorting from './Sorting';

class Filter extends Component {
  constructor() {
    super();

    this.state = {
      shouldMobileFilterShow: false,
      filterTypes: [
        {
          filterLabel: 'Rodzaj',
          filterName: 'sexToggle',
          dropdownShow: true,
          elements: [
            {
              chosen: true,
              element: 'Męskie',
            },
            {
              chosen: true,
              element: 'Kobiece',
            },
          ],
        },
        {
          filterLabel: 'Marka',
          filterName: 'brandsToggle',
          dropdownShow: false,
          elements: [
            {
              chosen: false,
              element: 'Adidas',
            },
            {
              chosen: false,
              element: 'Nike',
            },
            {
              chosen: false,
              element: 'Reebok',
            },
            {
              chosen: false,
              element: 'New Balance',
            },
            {
              chosen: false,
              element: 'Calvin Klein',
            },
            {
              chosen: false,
              element: 'Crocs',
            },
            {
              chosen: false,
              element: 'Nine West',
            },
            {
              chosen: false,
              element: 'Gravati',
            },
          ],
        },
        {
          filterLabel: 'Rozmiar',
          filterName: 'sizes',
          dropdownShow: false,
          elements: [
            {
              chosen: false,
              element: '36',
            },
            {
              chosen: false,
              element: '37',
            },
            {
              chosen: false,
              element: '38',
            },
            {
              chosen: false,
              element: '39',
            },
            {
              chosen: false,
              element: '40',
            },
            {
              chosen: false,
              element: '41',
            },
            {
              chosen: false,
              element: '42',
            },
            {
              chosen: false,
              element: '43',
            },
            {
              chosen: false,
              element: '44',
            },
            {
              chosen: false,
              element: '45',
            },
            {
              chosen: false,
              element: '46',
            },
            {
              chosen: false,
              element: '47',
            },
          ],
        },
        {
          filterLabel: 'Kolor',
          filterName: 'colors',
          dropdownShow: false,
          elements: [
            {
              chosen: false,
              element: 'Czarny',
              value: '#000000',
            },
            {
              chosen: false,
              element: 'Szary',
              value: '#B5B5B5',
            },
            {
              chosen: false,
              element: 'Biały',
              value: '#FFFFFF',
            },
            {
              chosen: false,
              element: 'Czerwony',
              value: '#e4262e',
            },
            {
              chosen: false,
              element: 'Pomarańczowy',
              value: 'rgba(255, 142, 92, 1)',
            },
            {
              chosen: false,
              element: 'Żółty',
              value: 'rgba(255, 229, 56, 1)',
            },
            {
              chosen: false,
              element: 'Zielony',
              value: 'rgba(106, 228, 115, 1)',
            },
            {
              chosen: false,
              element: 'Niebieski',
              value: '#2e7bee',
            },
            {
              chosen: false,
              element: 'Fioletowy',
              value: 'palevioletred',
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    // renderuje content w zaleznosci od szerokosci urzadzenia
    function renderContentFunction(sortingElements) {
      const {
        // state:
        shouldMobileFilterShow,
        // content:
        filterTypes,
      } = this.state;

      const {
        // content:
        pageCategory,
        pageSubcategory,
        quantityOfProducts,
        // funkcje:
        toggleSortingDropdown,
        setSortingOption,
        // state:
        shouldSortingDropdownShow,
        chosenSortingType,
        // content:
        sortingTypes,
      } = this.props;

      // phone:
      if (window.innerWidth <= theme.breakpoints.phone) {
        return (
          <FilterWrapper
            key="filter"
            pose={shouldMobileFilterShow ? 'open' : 'close'}
            delay={shouldMobileFilterShow ? 0 : 200}
          >
            <Title
              animation={{
                name: 'fade',
                toggle: !shouldMobileFilterShow,
                delay: shouldMobileFilterShow ? 0 : 500,
                value: {
                  x: '0px',
                  y: '-40px',
                },
              }}
              appear={{
                name: 'fade',
                delay: 100,
                value: {
                  x: 0,
                  y: 20,
                },
              }}
            >
              <h1>
                {' '}
                {pageCategory} <span>></span> {pageSubcategory}{' '}
              </h1>
              <small> {quantityOfProducts} </small>
            </Title>

            <SearchBar
              animation={{
                name: 'fade',
                toggle: !shouldMobileFilterShow,
                delay: shouldMobileFilterShow ? 100 : 450,
                value: {
                  x: '0px',
                  y: '-40px',
                },
              }}
              appear={{
                name: 'fade',
                delay: 200,
                value: {
                  x: 0,
                  y: 20,
                },
              }}
            />

            <ToggleFilter
              appear={{
                name: 'fade',
                delay: 0,
                value: {
                  x: 0,
                  y: 20,
                },
              }}
              animation={{
                name: 'move',
                toggle: !shouldMobileFilterShow,
                delay: 0,
                value: {
                  x: '0px',
                  y: '-60px',
                },
              }}
              onClick={this.toggleMobileFilter}
            >
              <svg
                style={{ opacity: shouldMobileFilterShow ? 0 : 1 }}
                viewBox="0 -450 1200 1200"
              >
                <path d="M561.8,232.3c-60,0-108.6-48.6-108.6-108.7S501.8,15,561.8,15s108.7,48.6,108.7,108.7S621.8,232.3,561.8,232.3z M232.3,527.3c0-60-48.6-108.6-108.7-108.6S15,467.3,15,527.3S63.6,636,123.7,636S232.3,587.3,232.3,527.3z M453.1,123.7H15 M670.4,123.7H757 M232.3,527.3H757" />
              </svg>

              <svg
                style={{ opacity: shouldMobileFilterShow ? 1 : 0 }}
                viewBox="-100 -450 1200 1200"
              >
                <path d="M10.6,10.6l692,692 M246.6,466.6l-236,236 M702.6,10.6l-236,236" />
              </svg>
            </ToggleFilter>

            <MobileFilterTypesWrapper shouldShow={shouldMobileFilterShow}>
              <Title
                animation={{
                  name: 'fade',
                  toggle: shouldMobileFilterShow,
                  delay: shouldMobileFilterShow ? 200 : 300,
                  value: {
                    x: '0px',
                    y: '40px',
                  },
                }}
              >
                <h1
                  style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}
                >
                  Filter
                </h1>
              </Title>

              <Toggle
                animation={{
                  name: 'fade',
                  toggle: shouldMobileFilterShow,
                  delay: shouldMobileFilterShow ? 250 : 250,
                  value: {
                    x: '0px',
                    y: '40px',
                  },
                }}
              >
                Opcje sortowania
              </Toggle>

              <SortingMobile
                animation={{
                  name: 'fade',
                  toggle: shouldMobileFilterShow,
                  delay: shouldMobileFilterShow ? 300 : 200,
                  value: {
                    x: '0px',
                    y: '40px',
                  },
                }}
              >
                {sortingElements}
              </SortingMobile>

              {filterTypes.map((props, index) => (
                <FilterType
                  animation={{
                    name: 'fade',
                    toggle: shouldMobileFilterShow,
                    delay: shouldMobileFilterShow
                      ? 400 + index * 50
                      : 100 - index * 50,
                    value: {
                      x: '0px',
                      y: '40px',
                    },
                  }}
                  key={props.filterName}
                  filterLabel={props.filterLabel}
                  filterToggle={this.toggleFilter.bind(this, index)}
                  dropdownShow={props.dropdownShow}
                  filterElements={this.getFilterElements(index)}
                />
              ))}
            </MobileFilterTypesWrapper>
          </FilterWrapper>
        );
      }

      // tabletPortrait & tabletLandscape
      if (
        window.innerWidth > theme.breakpoints.phone &&
        window.innerWidth < theme.breakpoints.tabletLandscape
      ) {
        return (
          <>
            <FilterWrapper>
              <Title
                appear={{
                  name: 'fade',
                  delay: 200,
                  value: {
                    x: 0,
                    y: -20,
                  },
                }}
              >
                <h1>
                  {' '}
                  {pageCategory} <span>></span> {pageSubcategory}{' '}
                </h1>
                <small> {quantityOfProducts} </small>
              </Title>

              <SearchBar
                appear={{
                  name: 'fade',
                  delay: 0,
                  value: {
                    x: 0,
                    y: -20,
                  },
                }}
              />

              <ToggleFilter
                appear={{
                  name: 'fade',
                  delay: 0,
                  value: {
                    x: 0,
                    y: -20,
                  },
                }}
                animation={{
                  name: 'move',
                  toggle: !shouldMobileFilterShow,
                  delay: 0,
                  value: {
                    x: '0px',
                    y: '-60px',
                  },
                }}
                onClick={this.toggleMobileFilter}
              >
                <svg
                  style={{ opacity: shouldMobileFilterShow ? 0 : 1 }}
                  viewBox="0 -450 1200 1200"
                >
                  <path d="M561.8,232.3c-60,0-108.6-48.6-108.6-108.7S501.8,15,561.8,15s108.7,48.6,108.7,108.7S621.8,232.3,561.8,232.3z M232.3,527.3c0-60-48.6-108.6-108.7-108.6S15,467.3,15,527.3S63.6,636,123.7,636S232.3,587.3,232.3,527.3z M453.1,123.7H15 M670.4,123.7H757 M232.3,527.3H757" />
                </svg>

                <svg
                  style={{ opacity: shouldMobileFilterShow ? 1 : 0 }}
                  viewBox="0 0 1200 1200"
                >
                  <path
                    d={
                      window.inneWidth < 480
                        ? 'M10.6,10.6l692,692 M246.6,466.6l-236,236 M702.6,10.6l-236,236'
                        : 'M442,184L48.5,500 M442,816L218,636.1 M959.5,499.5h-911'
                    }
                  />
                </svg>
              </ToggleFilter>
            </FilterWrapper>

            <MobileFilterTypesWrapper
              animation={{
                name: 'move',
                toggle: shouldMobileFilterShow,
                delay: shouldMobileFilterShow ? 250 : 0,
                value: {
                  x: '-400px',
                  y: '0px',
                },
              }}
              shouldShow={shouldMobileFilterShow}
            >
              <Title
                animation={{
                  name: 'fade',
                  toggle: shouldMobileFilterShow,
                  delay: shouldMobileFilterShow ? 250 : 0,
                  value: {
                    x: '-40px',
                    y: '0px',
                  },
                }}
              >
                <h1
                  style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}
                >
                  Filter
                </h1>
              </Title>

              <Toggle
                animation={{
                  name: 'fade',
                  toggle: shouldMobileFilterShow,
                  delay: shouldMobileFilterShow ? 300 : 0,
                  value: {
                    x: '-40px',
                    y: '0px',
                  },
                }}
              >
                Opcje sortowania
              </Toggle>

              <SortingMobile
                animation={{
                  name: 'fade',
                  toggle: shouldMobileFilterShow,
                  delay: shouldMobileFilterShow ? 350 : 0,
                  value: {
                    x: '-40px',
                    y: '0px',
                  },
                }}
              >
                {sortingElements}
              </SortingMobile>

              {filterTypes.map((props, index) => (
                <FilterType
                  animation={{
                    name: 'fade',
                    toggle: shouldMobileFilterShow,
                    delay: shouldMobileFilterShow ? 450 + index * 50 : 0,
                    value: {
                      x: '-40px',
                      y: '0px',
                    },
                  }}
                  key={props.filterName}
                  filterLabel={props.filterLabel}
                  filterToggle={this.toggleFilter.bind(this, index)}
                  dropdownShow={props.dropdownShow}
                  filterElements={this.getFilterElements(index)}
                />
              ))}
            </MobileFilterTypesWrapper>
          </>
        );
      }

      // desktop & up

      return (
        <>
          <DesktopHeader>
            <Title
              appear={{
                name: 'fade',
                delay: 400,
                value: {
                  x: 0,
                  y: -20,
                },
              }}
            >
              <h1>
                {' '}
                {pageCategory} <span>></span> {pageSubcategory}{' '}
              </h1>
              <small> {quantityOfProducts} </small>
            </Title>

            <Sorting
              appear={{
                name: 'fade',
                delay: 400,
                value: {
                  x: 0,
                  y: -20,
                },
              }}
              toggleSortingDropdown={toggleSortingDropdown}
              setSortingOption={setSortingOption}
              shouldSortingDropdownShow={shouldSortingDropdownShow}
              sortingTypes={sortingTypes}
              chosenSortingType={chosenSortingType}
            />
          </DesktopHeader>

          <FilterWrapper>
            <SearchBar
              appear={{
                name: 'fade',
                delay: 400,
                value: {
                  x: 0,
                  y: -20,
                },
              }}
            />

            {filterTypes.map((props, index) => (
              <FilterType
                appear={{
                  name: 'fade',
                  delay: 200 - 100 * index,
                  value: {
                    x: 0,
                    y: -20,
                  },
                }}
                key={props.filterName}
                filterLabel={props.filterLabel}
                filterToggle={this.toggleFilter.bind(this, index)}
                dropdownShow={props.dropdownShow}
                filterElements={this.getFilterElements(index)}
              />
            ))}
          </FilterWrapper>
        </>
      );
    }

    window.addEventListener('resize', this.resize);
    this.renderContent = renderContentFunction;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  // dynamiczne przekazywanie elementow z this.state.filterTypes do <FilterType />
  getFilterElements(filterIndex) {
    const { filterTypes } = this.state;

    return filterTypes[filterIndex].elements.map((props, index) => (
      <FilterTypeElement
        animation={{
          name: 'fade',
          toggle: filterTypes[filterIndex].dropdownShow,
          delay: filterTypes[filterIndex].dropdownShow
            ? (350 / filterTypes[filterIndex].elements.length) * index
            : 0,
          value: {
            x: '0px',
            y: '20px',
          },
        }}
        key={props.element}
        onClick={() => this.choseFilterTypeElement(index, filterIndex)}
        chosen={!!props.chosen}
      >
        {props.element}
      </FilterTypeElement>
    ));
  }

  resize = () => this.forceUpdate();

  // rozwija filter na telefonach
  toggleMobileFilter = () => {
    this.setState({
      shouldMobileFilterShow: !this.state.shouldMobileFilterShow,
    });
  };

  renderContent = sortingElements => {
    // jako, ze aplikacja jest SSR to jest to pomocnicza funkcja, do ktorej jest przypisywana inna funkcja w componentDidMount()
  };

  // ustawienie sortowania dla telefonow
  setSortingOption = i => {
    this.setState({
      chosenSortingType: i,
      shouldShow: false,
    });
  };

  // dynamiczne rozwijanie/zwijanie dropdown'a dla this.state.filterTypes
  toggleFilter(index) {
    const filterTypes = [...this.state.filterTypes];
    const filterType = { ...filterTypes[index] };
    filterType.dropdownShow = !this.state.filterTypes[index].dropdownShow;
    filterTypes[index] = filterType;

    this.setState({ filterTypes });
  }

  // zaznaczanie/odznaczanie opcji w filtrze
  choseFilterTypeElement(elementIndex, filterIndex) {
    const filterTypes = [...this.state.filterTypes];
    const filterType = { ...filterTypes[filterIndex] };
    const elements = [...filterType.elements];
    const element = { ...elements[elementIndex] };
    element.chosen = !this.state.filterTypes[filterIndex].elements[elementIndex]
      .chosen;
    elements[elementIndex] = element;
    filterType.elements = elements;
    filterTypes[filterIndex] = filterType;

    this.setState({
      filterTypes,
    });
  }

  render() {
    const sortingElements = this.props.sortingTypes.map((props, i) => (
      <FilterTypeElement
        key={i}
        onClick={() => this.props.setSortingOption(i)}
        chosen={this.props.chosenSortingType === i}
      >
        {props.name}
      </FilterTypeElement>
    ));

    return <div>{this.renderContent(sortingElements)}</div>;
  }
}

export default Filter;
