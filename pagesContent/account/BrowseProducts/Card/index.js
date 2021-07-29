import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Wrapper, Text, Background } from './styles';

const Card = props => {
  const {
    // content:
    background,
    text,
    url,
  } = props;

  return (
    <Link href={url}>
      <Wrapper>
        <Background background={background} />
        <Text>{text}</Text>
      </Wrapper>
    </Link>
  );
};

Card.propTypes = {
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
