import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import SignIn from './SignIn';
import SignUp from './SignUp';

class SmallForm extends React.Component {
  constructor(props) {
    super(props);
    const { signUpActualForm } = this.props;

    this.state = {
      shouldSignInShow: true,
      shouldSignUpShow: false,
      signUpQuantityOfForms: undefined,
      signUpActualForm,
    };
  }

  componentDidMount() {
    const { signUpInfoData } = this.props;

    this.setState({
      signUpQuantityOfForms: signUpInfoData.length,
    });
  }

  openSignIn = () => {
    this.setState({
      shouldSignInShow: true,
      shouldSignUpShow: false,
    });
  };

  openSignUp = () => {
    this.setState({
      shouldSignInShow: false,
      shouldSignUpShow: true,
    });
  };

  nextForm = () => {
    const { signUpActualForm, signUpQuantityOfForms } = this.state;

    if (signUpActualForm < signUpQuantityOfForms) {
      this.setState({
        signUpActualForm: signUpActualForm + 1,
      });
    } else {
      this.openSignIn();

      setTimeout(() => {
        this.setState({
          signUpActualForm: 1,
        });
      }, 500);
    }
  };

  previousForm = () => {
    const { signUpActualForm } = this.state;

    if (signUpActualForm === 1) {
      this.openSignUp();
    } else {
      this.setState({
        signUpActualForm: signUpActualForm - 1,
      });
    }
  };

  render() {
    const {
      // state:
      shouldSignInShow,
      shouldSignUpShow,
      signUpActualForm,
    } = this.state;

    const {
      // data:
      signUpInfoData,
    } = this.props;

    return (
      <Wrapper>
        <SignIn
          shouldShow={shouldSignInShow}
          openSignUp={() => this.openSignUp()}
        />

        <SignUp
          shouldShow={shouldSignUpShow}
          openSignIn={() => this.openSignIn()}
          nextForm={() => this.nextForm()}
          previousForm={() => this.previousForm()}
          signUpActualForm={signUpActualForm}
          signUpInfoData={signUpInfoData}
        />
      </Wrapper>
    );
  }
}

SmallForm.propTypes = {
  // aktualny etap rejestracji
  signUpActualForm: PropTypes.number.isRequired,
  // tablica z inputami, opisem itd
  signUpInfoData: PropTypes.array.isRequired,
};

export default SmallForm;
