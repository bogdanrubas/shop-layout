import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Inputs } from './styles';
import Input from '../../../layout/Input';

const Container = props => {
  const {
    // data:
    title,
    inputs,
    gridTemplateColumns,
    gridTemplateAreas,
  } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>

      <Inputs
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateAreas={gridTemplateAreas}
      >
        {inputs.map((input, i) => (
          <Input
            key={i}
            gridArea={input.gridArea}
            type={input.type}
            placeholder={input.placeholder}
            label={input.label}
          />
        ))}
      </Inputs>
    </Wrapper>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired,
  gridTemplateColumns: PropTypes.object.isRequired,
  gridTemplateAreas: PropTypes.object.isRequired,
};

export default Container;
