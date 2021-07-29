import React, { Component } from 'react';
import Image from './Image';
import Info from './Info';
import SimilarProducts from './SimilarProducts';
import { Wrapper } from './styles';
import products from '../../data/products.json';

export default class PageProduct extends Component {
  constructor() {
    super();

    this.state = {
      product: products[6],
      actualImage: 0,
      actualColor: 0,
      quantityOfImages: products[6].productColors[0].imagesUrl.length,
      sizesDropdown: {},
      descriptionDropdown: {},
    };
  }

  componentWillMount() {
    const { product, actualColor } = this.state;

    this.setState({
      sizesDropdown: {
        title: 'Wybierz rozmiar',
        content: product.productColors[actualColor].sizes,
        selectable: true,
        show: true,
      },
      descriptionDropdown: {
        title: 'Opis produktu',
        content: product.description,
        selectable: false,
        show: false,
      },
    });

    // tworzenie "chosen" dla product > productColors > sizes (potrzebne do zaznaczania i odznaczania rozmiaru):
    setTimeout(() => {
      product.productColors.map((color, i) => {
        color.sizes.map((size, j) => {
          size.chosen = false;

          return null;
        });

        return null;
      });

      setTimeout(() => {
        this.setState({ product });
      }, 50);
    }, 50);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => this.forceUpdate();

  // <Image>
  setImage = i => {
    this.setState(prevState => ({
      previousImage: prevState.actualImage,
      actualImage: i,
    }));
  };

  nextImage = () => {
    const { actualImage, quantityOfImages } = this.state;

    if (actualImage < quantityOfImages - 1) {
      this.setState(prevState => ({
        previousImage: prevState.actualImage,
        actualImage: prevState.actualImage + 1,
      }));
    } else if (actualImage === quantityOfImages - 1) {
      this.setState(prevState => ({
        previousImage: prevState.actualImage,
        actualImage: 0,
      }));
    }
  };

  previousImage = () => {
    const { actualImage, quantityOfImages } = this.state;

    if (actualImage > 0) {
      this.setState(prevState => ({
        previousImage: prevState.actualImage,
        actualImage: prevState.actualImage - 1,
      }));
    } else if (actualImage === 0) {
      this.setState(prevState => ({
        previousImage: prevState.actualImage,
        actualImage: quantityOfImages - 1,
      }));
    }
  };

  changeColor = newColor => {
    const { actualColor, product } = this.state;

    if (actualColor !== newColor) {
      // zmiana koloru i przeliczenie ilosci zdjec dla danego koloru:
      this.setState({
        actualColor: newColor,
        actualImage: 0,
        quantityOfImages: product.productColors[newColor].imagesUrl.length,
      });

      // zmiana dostepnych rozmiarow przy zmianie koloru w Info > SizesDropdown:
      setTimeout(() => {
        const { sizesDropdown } = this.state;
        sizesDropdown.content = product.productColors[actualColor].sizes;

        this.setState({ sizesDropdown });
      }, 50);
    }
  };
  // </Image>

  // <Info>
  toggleSizesDropdown = () => {
    const { sizesDropdown } = this.state;

    const dropdown = sizesDropdown;
    dropdown.show = !dropdown.show;

    this.setState({
      sizesDropdown: dropdown,
    });
  };

  toggleDescriptionDropdown = () => {
    const { descriptionDropdown } = this.state;

    const dropdown = descriptionDropdown;
    dropdown.show = !dropdown.show;

    this.setState({
      descriptionDropdown: dropdown,
    });
  };

  // zaznaczenie/odznaczenie rozmiaru:
  chooseDropdownElement = i => {
    const { product } = this.state;

    product.productColors.map((color, j) => {
      color.sizes.map((size, k) => {
        size.chosen = false;

        return null;
      });

      return null;
    });

    setTimeout(() => {
      this.setState({ product });

      const { sizesDropdown } = this.state;
      const color = sizesDropdown.content[i];
      color.chosen = !color.chosen;
      sizesDropdown[i] = color;

      setTimeout(() => {
        this.setState({ sizesDropdown });
      }, 50);
    }, 50);
  };
  // </Info>

  render() {
    const {
      product,
      actualImage,
      actualColor,
      quantityOfImages,
      sizesDropdown,
      descriptionDropdown,
    } = this.state;

    return (
      <Wrapper>
        <Image
          product={product}
          actualImage={actualImage}
          actualColor={actualColor}
          quantityOfImages={quantityOfImages}
          nextImage={this.nextImage}
          previousImage={this.previousImage}
          setImage={this.setImage}
          changeColor={this.changeColor}
        />

        <Info
          product={product}
          sizesDropdown={sizesDropdown}
          descriptionDropdown={descriptionDropdown}
          toggleSizesDropdown={this.toggleSizesDropdown}
          toggleDescriptionDropdown={this.toggleDescriptionDropdown}
          chooseDropdownElement={this.chooseDropdownElement}
        />

        <SimilarProducts />
      </Wrapper>
    );
  }
}