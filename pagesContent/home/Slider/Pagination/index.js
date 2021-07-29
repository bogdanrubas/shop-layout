import React from 'react';
import { Wrapper, Container, Button, SlideNumber, Time } from './styles';

const Pagination = (props) => {
  const {
    // state:
    actualSlide,
    quantityOfSlides,
    startTimeAnimation,
    autoSlidingTime,
    // funkcje:
    next,
    previous
  } = props;

  return (
    <Wrapper>
      <Container>
        <Button onClick={next}>
          <svg viewBox="0 0 1000 1000">
            <path d="M499.9,269.9L40.8,729 M650,420l309,309"/>
          </svg>
        </Button>

        <SlideNumber>
          {actualSlide + 1 < 9 ? "0" : ""}{actualSlide < quantityOfSlides ? actualSlide + 2 : "1"}
        </SlideNumber>

        <Time
          startTimeAnimation={startTimeAnimation}
          autoSlidingTime={autoSlidingTime}
        />

        <SlideNumber>
          {actualSlide + 1 < 10 ? "0" : ""}{actualSlide + 1}
        </SlideNumber>

        <Button onClick={previous}>
          <svg viewBox="0 0 1000 1000">
            <path d="M499.9,730L959,270.9 M349.8,579.9l-309-309"/>
          </svg>
        </Button>
      </Container>
    </Wrapper>
  )
};

export default Pagination;
