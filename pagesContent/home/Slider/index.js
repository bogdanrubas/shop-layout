import React, { Component } from 'react';
import { Wrapper } from './styles';
import Pagination from './Pagination';
import Image from './Image';
import Info from './Info';

class Slider extends Component {
  constructor() {
    super();

    this.state = {
      autoSlidingTime: 3000,
      startTimeAnimation: false,
      actualSlide: 0,
      quantityOfSlides: undefined,
      maxInfoContainerHeight: 0,
      slides: [
        {
          imgUrl:
            'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/h69tsb9bcw9wa0i2wikk/buty-meskie-air-max-270-vN3ncN.jpg',
          title: 'Nike Air Max 270',
          description:
            'Buty Nike Air Max 270 powstały na bazie inspiracji dwiema ikonami Air: Air Max 180 i Air Max 93. Mają największą poduszkę gazową Air pod piętą ze wszystkich modeli Nike, dzięki czemu są niewiarygodnie miękkie.',
          price: 639,
        },
        {
          imgUrl:
            'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lx00dregzrilszzcs304/meskie-buty-air-max-97-bw-hvtV3l.jpg',
          title: 'Nike Air Max 97/BW',
          description:
            'Męskie buty Nike Air Max 97/BW czerpią inspirację z cholewki Air Max BW oraz podeszwy Air Max 97. To buty, które łączą w sobie dwa kultowe modele i opowiadają swoją własną historię Air. Zdobienia takie jak gumowy znak Swoosh to ukłon w stronę oryginalnego modelu Air Max BW, a poduszki gazowe Max Air to gwarancja amortyzacji i nowoczesnego wyglądu.',
          price: 759,
        },
        {
          imgUrl:
            'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ejgkznq6zcpkfd2has7r/buty-meskie-air-jordan-future-lrhP1K.jpg',
          title: 'Air Jordan Future',
          description:
            'Łączące legendarny styl marki Jordan z nowatorskimi rozwiązaniami konstrukcyjnymi, męskie buty Air Jordan Future zapewniają sportową wygodę i wyjątkowy wygląd. Są doskonałym wyborem po meczu dla zawodników, którzy nie uznają kompromisów w zakresie wygody.',
          price: 549,
        },
      ],
    };

    this.autoSlidingTimer = null;
  }

  componentDidMount() {
    const { slides } = this.state;
    // ponizsze 3 linijki sa potrzebne, aby przy pierwszym kliknieciu nie bugowal sie pasek z czasem
    this.resetTimeBar();
    this.autoSliding();
    this.setState({ actualSlide: 0 });

    this.setState({ quantityOfSlides: slides.length - 1 });
  }

  // resetuje timer autoslajdowania po kliknieciu na "next()" i "prev()"
  resetAutoSliding = () => {
    const { autoSlidingTime } = this.state;

    clearTimeout(this.autoSlidingTimer);
    this.autoSlidingTimer = setTimeout(this.autoSliding, autoSlidingTime);
  };

  // resetuje pasek czasu - "<Time />::before" po autoslajdowaniu i po klikncieciu na "next()" i "prev()"
  resetTimeBar = () => {
    this.setState({ startTimeAnimation: false });

    setTimeout(
      function() {
        this.setState({ startTimeAnimation: true });
      }.bind(this),
      50
    );
  };

  autoSliding = () => {
    const { actualSlide, quantityOfSlides, autoSlidingTime } = this.state;
    this.resetTimeBar();
    this.autoSlidingTimer = setTimeout(this.autoSliding, autoSlidingTime);

    if (actualSlide === quantityOfSlides) {
      this.setState({ actualSlide: 0 });
    } else {
      this.setState({ actualSlide: actualSlide + 1 });
    }
  };

  next = () => {
    const { actualSlide, quantityOfSlides } = this.state;

    if (actualSlide === quantityOfSlides) {
      this.setState({ actualSlide: 0 });
    } else {
      this.setState({ actualSlide: actualSlide + 1 });
    }

    this.resetTimeBar();
    this.resetAutoSliding();
  };

  previous = () => {
    const { actualSlide, quantityOfSlides } = this.state;

    if (actualSlide === 0) {
      this.setState({ actualSlide: quantityOfSlides });
    } else {
      this.setState({ actualSlide: actualSlide - 1 });
    }

    this.resetTimeBar();
    this.resetAutoSliding();
  };

  // funkcja wywolywana w <Info /> zeby znalezc maksymalna wysokosc dla <Info /> -> content -> <Container />
  // aby ustawic ja pozniej w <Wrapper /> jako: grid-template-rows: auto {maxValue}; dla telefonow
  getMaxHeight = value => {
    this.setState({
      maxInfoContainerHeight: `${value + 50}px`,
    });
  };

  render() {
    const {
      maxInfoContainerHeight,
      actualSlide,
      quantityOfSlides,
      startTimeAnimation,
      autoSlidingTime,
      slides,
    } = this.state;

    return (
      <Wrapper maxInfoContainerHeight={maxInfoContainerHeight}>
        <Pagination
          next={e => this.next(e)}
          previous={e => this.previous(e)}
          actualSlide={actualSlide}
          quantityOfSlides={quantityOfSlides}
          startTimeAnimation={startTimeAnimation}
          autoSlidingTime={autoSlidingTime}
        />

        <Image
          slides={slides}
          actualSlide={actualSlide}
          quantityOfSlides={quantityOfSlides}
        />

        <Info
          getMaxHeight={i => this.getMaxHeight(i)}
          slides={slides}
          quantityOfSlides={quantityOfSlides}
          actualSlide={actualSlide}
        />
      </Wrapper>
    );
  }
}

export default Slider;
