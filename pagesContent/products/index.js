import React, { Component } from 'react';
import ProductsGrid from './ProductsGrid';
import Filter from '../../layout/Filter';
import ProductsData from '../../data/products.json';

export default class PageProducts extends Component {
  constructor() {
    super();

    this.state = {
      pageCategory: 'Buty',
      pageSubcategory: 'Sportowe',
      quantityOfProducts: undefined,
      chosenSortingType: 0,
      shouldSortingDropdownShow: false,
      sortingTypes: [
        {
          name: 'Najnowsze',
        },
        {
          name: 'Najwyższa ocena',
        },
        {
          name: 'Cena rosnąco',
        },
        {
          name: 'Cena malejąco',
        },
      ],
    };
  }

  componentDidMount() {
    if (ProductsData.length === 1) {
      this.setState({ quantityOfProducts: `${ProductsData.length} produkt` });
    } else if (ProductsData.length > 1 && ProductsData.length < 5) {
      this.setState({ quantityOfProducts: `${ProductsData.length} produkty` });
    } else {
      this.setState({ quantityOfProducts: `${ProductsData.length} produktów` });
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }

  setSortingOption = index => {
    this.setState({
      chosenSortingType: index,
      shouldSortingDropdownShow: false,
    });
  };

  toggleSortingDropdown = () => {
    const { shouldSortingDropdownShow } = this.state;

    this.setState({
      shouldSortingDropdownShow: !shouldSortingDropdownShow,
    });
  };

  render() {
    const {
      // content:
      pageCategory,
      pageSubcategory,
      sortingTypes,
      // state:
      quantityOfProducts,
      shouldSortingDropdownShow,
      chosenSortingType,
    } = this.state;

    return (
      <>
        <Filter
          // page info:
          pageCategory={pageCategory}
          pageSubcategory={pageSubcategory}
          quantityOfProducts={quantityOfProducts}
          // sorting:
          toggleSortingDropdown={e => this.toggleSortingDropdown(e)}
          setSortingOption={e => this.setSortingOption(e)}
          shouldSortingDropdownShow={shouldSortingDropdownShow}
          sortingTypes={sortingTypes}
          chosenSortingType={chosenSortingType}
        />

        <ProductsGrid products={ProductsData} />
      </>
    );
  }
}
