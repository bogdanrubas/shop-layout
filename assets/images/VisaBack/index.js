import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {

  }

  .st0 {
    fill:#F6F7F9;
  }

	.st1 {
    fill:none;
    stroke: #DDDEE4;
    stroke-width: 5;
    stroke-miterlimit: 10;
  }

	.st2 {
    fill: #CFD3DC;
  }

	.st3 {
    fill: #F2F2F6;
  }

	.st4 {
    fill:#CED2DB;
  }
`;

const VisaFront = () => {
  return (
    <Wrapper>
      <svg viewBox="0 0 1000 1000">
        <path class="st0" d="M138.7,777.2c0,0,605.3-21.7,800.8-527.7l20.7,0.8l7.2,2l3.6,4.5l2.1,6.4v500.4l-4.5,9.8l-8.3,3L138.7,777.2z"/>
        <path class="st1" d="M964.2,777.2H43.5c-4.4,0-8-3.6-8-8V257.5c0-4.4,3.6-8,8-8h920.7c4.4,0,8,3.6,8,8v511.7C972.2,773.6,968.6,777.2,964.2,777.2z"/>
        <rect x="35" y="300" class="st2" width="937" height="124"/>
        <path class="st3" d="M638,555H77c-6.6,0-12-5.4-12-12v-73c0-6.6,5.4-12,12-12h561c6.6,0,12,5.4,12,12v73C650,549.6,644.6,555,638,555z"/>
        <path class="st4" d="M531,519h76c6.6,0,12-5.4,12-12v0c0-6.6-5.4-12-12-12h-76c-6.6,0-12,5.4-12,12v0C519,513.6,524.4,519,531,519z"/>
        <path class="st4" d="M322,519h158c6.6,0,12-5.4,12-12v0c0-6.6-5.4-12-12-12H322c-6.6,0-12,5.4-12,12v0C310,513.6,315.4,519,322,519z"/>
      </svg>
    </Wrapper>
  )
}

export default VisaFront;
