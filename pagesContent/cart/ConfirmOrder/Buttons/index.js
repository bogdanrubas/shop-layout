import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './styles';

const Buttons = props => {
  const { confirmOrderStep, confirmOrderMaxStep, setStep } = props;

  return (
    <Wrapper
      confirmOrderMaxStep={confirmOrderMaxStep}
      confirmOrderStep={confirmOrderStep}
    >
      <Button back onClick={() => setStep(confirmOrderStep - 1)}>
        Cofnij
      </Button>

      <Button
        appear={{
          name: 'fade',
          delay: 0,
          value: {
            x: 0,
            y: 0,
          },
        }}
        onClick={() => setStep(confirmOrderStep + 1)}
      >
        Dalej
      </Button>
    </Wrapper>
  );
};

Buttons.propTypes = {
  confirmOrderStep: PropTypes.number.isRequired,
  confirmOrderMaxStep: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default Buttons;

// import React from 'react';
// import { Wrapper, Button } from './styles';

// const Buttons = (props) => {
//   const {
//     confirmOrderStep,
//     confirmOrderMaxStep,
//     setStep
//   } = props;

//   return (
//     <Wrapper>
//       <Spring to={{
//           opacity: confirmOrderStep !== 0 ? 1 : 0,
//           pointerEvents: confirmOrderStep !== 0 ? "all" : "none",
//           transform: confirmOrderStep !== 0 ? "translateX(0px)" : "translateX(-200px)"
//         }}>
//         {buttonStyle =>
//           <div style={buttonStyle}>
//             <Button back onClick={e => setStep(confirmOrderStep - 1)}>
//               Cofnij
//             </Button>
//           </div>
//         }
//       </Spring>

//       <Spring to={{
//           opacity: confirmOrderStep !== confirmOrderMaxStep ? 1 : 0,
//           pointerEvents: confirmOrderStep !== confirmOrderMaxStep ? "all" : "none",
//           transform: confirmOrderStep !== confirmOrderMaxStep ? "translateX(0px)" : "translateX(200px)"
//         }}>
//         {buttonStyle =>
//           <div style={buttonStyle}>
//             <Button
//               appear={{
// name: "fade",
// delay: window.innerWidth > variables.tabletLandscape ? 50 : 850,
// value: {
//   x: 0,
//   y: window.innerWidth > variables.tabletLandscape ? -20 : 20
// }
//               }}
//               onClick={e => setStep(confirmOrderStep + 1)}>
//               Dalej
//             </Button>
//           </div>
//         }
//       </Spring>
//     </Wrapper>
//   )
// }

// export default Buttons;
