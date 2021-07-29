import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Container, Icon, Title, Description } from './styles';

const Info = props => {
  const {
    // state:
    shouldShow,
    signUpActualForm,
    // data:
    signUpInfoData,
  } = props;

  const info = signUpInfoData.map((information, i) => (
    <Container
      key={i}
      shouldShow={shouldShow}
      actual={i + 1 === signUpActualForm}
    >
      <Icon />
      <Title>{information.title}</Title>
      <Description>{information.description}</Description>
    </Container>
  ));

  return <Wrapper toggleAnimation={shouldShow}>{info}</Wrapper>;
};
Info.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  signUpActualForm: PropTypes.number.isRequired,
  signUpInfoData: PropTypes.array.isRequired,
};

export default Info;
