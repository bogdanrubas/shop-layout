import React, { Component } from "react";
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import { ProductWrapper } from './styles';
import { MoreColorsImage } from './ProductInfo/styles';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      brand: props.brand,
      price: props.price,
      quantityOfImages: undefined,
      prevImg: undefined,
      activeImg: 0,
      chosenColor: 0,
      productColors: props.productColors
    }
  }

  componentDidMount() {
    this.setState({
      quantityOfImages: this.props.productColors[this.state.chosenColor].imagesUrl.length
    })
  }

  // wybranie innego koloru w ProductInfo > MoreColors
  changeColor = (newColor) => {
    const {
      chosenColor
    } = this.state;

    const {
      productColors
    } = this.props;

    if (chosenColor !== newColor) {
      this.setState({
        chosenColor: newColor,
        activeImg: 0,
        quantityOfImages: productColors[newColor].imagesUrl.length
      })
    }
  }

  // wybranie zdjecie poprzez klikniecie na "kolko" w <Pagination />
  setImg = (i) => {
    this.setState(prevState => ({
      prevImg: prevState.activeImg,
      activeImg: i
    }));
  }

  // przejscie do nastepnego zdjecia
  nextImage = () => {
    const {
      activeImg,
      quantityOfImages
    } = this.state;

    if (activeImg < quantityOfImages - 1) {
      this.setState(prevState => ({
        prevImg: prevState.activeImg,
        activeImg: prevState.activeImg + 1
      }));
    }

    else if (activeImg === quantityOfImages - 1) {
      this.setState(prevState => ({
        prevImg: prevState.activeImg,
        activeImg: 0
      }));
    }
  }

  // przejscie do poprzedniego zdjecia
  previousImage = () => {
    const {
      activeImg,
      quantityOfImages
    } = this.state;

    if (activeImg > 0) {
      this.setState(prevState => ({
        prevImg: prevState.activeImg,
        activeImg: prevState.activeImg - 1
      }));
    }

    else if (activeImg === 0) {
      this.setState(prevState => ({
        prevImg: prevState.activeImg,
        activeImg: quantityOfImages - 1
      }));
    }
  }

  // "kolorowe kolka" pokazujace dostepne kolory w ProductInfo > AvailableColors
  availableColors = () => {
    const {
      productColors
    } = this.state;

    var lessEqualThree = productColors.map((props, i) => (
      <span key={i} />
    ));

    var moreThanThree = (
      <>
        <span />
        <span />
        <span />

        <small>+{productColors.length - 3}</small>
      </>
    );

    if (productColors.length < 4) {
      return lessEqualThree;
    }

    else {
      return moreThanThree;
    }
  }

  // animacja "duzego zdjecia" po wybraniu prevImg(), nextImg(), setImg()
  bigImageAnimation(i) {
    const {
      quantityOfImages,
      activeImg,
      prevImg
    } = this.state;

    var left;

    if (quantityOfImages > 2) {
      if (i === 0 && activeImg === quantityOfImages - 1) {
        left = 210;
      }
      else if (i === quantityOfImages - 1 && activeImg === 0) {
        left = -210;
      }
      else if (i < activeImg) {
        left = -210;
      }
      else if (i > activeImg) {
        left = 210;
      }
      else if (i === activeImg) {
        left = 0;
      }

      return {
        transform: `translateX(${left}px)`,
        opacity: activeImg === i ? 1 : 0
      }
    }

    else {
      if (i === prevImg && prevImg === 0 && activeImg === 1) {
        left = -210;
      }
      else if (i === activeImg) {
        left = 0;
      }
      else {
        left = 210;
      }

      return {
        transform: `translateX(${left}px)`,
        opacity: activeImg === i ? 1 : 0
      }
    }
  }

  render() {
    const {
      // content:
      name,
      brand,
      price,
      productColors,
      // state:
      quantityOfImages,
      chosenColor,
      activeImg
    } = this.state;

    // duze zdjecie przedstawiajace produkt
    const bigImage = productColors[chosenColor].imagesUrl.map((props, i) =>
      <img
        key={i}
        alt={productColors[chosenColor].imagesUrl[i].imgUrl}
        src={productColors[chosenColor].imagesUrl[i].imgUrl}
        style={this.bigImageAnimation(i)}
      />
    );

    // "kolka" pokazujace ilosc zdjec dla danego koloru
    const pagination = productColors[chosenColor].imagesUrl.map((props, i) => (
      <span
        key={i}
        onClick={ (e) => this.setImg(i) }
        className={( activeImg === i ? "active " : "" )}
      />
    ));

    // dostepne kolory dla danego produktu
    const moreColors = productColors.map((props, i) => (
      <MoreColorsImage
        key={i}
        onClick={(e) => this.changeColor(i)}
        animationDelay={i}>
        <img src={props.imagesUrl[0].imgUrl} alt={i} />
      </MoreColorsImage>
    ));

    return (
      <ProductWrapper>
        <ProductImage
          bigImage={bigImage}
          quantityOfImages={quantityOfImages}
          pagination={pagination}
          previousImage={this.previousImage}
          nextImage={this.nextImage}
        />

        <ProductInfo
          name={name}
          brand={brand}
          price={price}
          moreColors={moreColors}
          availableColors={this.availableColors()}
          quantityOfColors={productColors.length}
          firstColor={productColors[0].color}
          secondColor={productColors.length >= 2 ? productColors[1].color : ""}
          thirdColor={productColors.length >= 3 ? productColors[2].color : ""}
        />
      </ProductWrapper>
    );
  }
}

export default Product;
