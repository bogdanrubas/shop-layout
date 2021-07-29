import React from 'react';
import { Wrapper } from './styles';
import Slider from './Slider';
import PopularProducts from './PopularProducts';
import News from './News';

interface PageHomeProps {
}

const PageHome: React.FunctionComponent<PageHomeProps> = () => {
  return (
    <Wrapper>
      <div>
        <Slider />
      </div>
      <PopularProducts />
      <News />
    </Wrapper>
  );
};

export default PageHome;