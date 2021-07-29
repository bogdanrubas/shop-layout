import React from 'react';
import Link from 'next/link';
import { Wrapper } from './styles';

interface LogoProps {
}

const Logo: React.FunctionComponent<LogoProps> = () => {
  return (
    <Link href="/">
      <a>
        <Wrapper>
          <svg viewBox="0 0 1000 1000">
            <path d="M640.1,392.2C721.2,167.5,559,81.6,507.5,94c-290.2,70.2-124.8,583.7-124.8,583.7h273.1c0,0,0,160.1,0,216.3c0,73.4-77.8,78.6-77.8,78.6s-104.7,0-167.1,0s-72.6-74.9-72.6-74.9l-0.7-46.8v-56.2h64.4V874c0,52.7,43.3,43.3,43.3,43.3s51.5,0,105.3,0s46-46,46-46V735.5h-259c-84.3-294.9-80.2-457.4-18.7-566.4c173.1-273.5,352.7-81.1,383.9,0c31.2,81.1,23.4,149.8,23.4,149.8s-1.6,46.8-39,117s-29.6,182.6-29.6,182.6h-58.6C595.5,542,610.4,441.8,640.1,392.2z" />
          </svg>

          <p>
            <b>Shoe</b>Store
          </p>
        </Wrapper>
      </a>
    </Link>
  );
};

export default Logo;