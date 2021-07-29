import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RemindPassword from './RemindPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Wrapper } from './styles';

class Back extends Component {
  static propTypes = {
    shouldFlip: PropTypes.bool,
    shouldRemindPasswordShow: PropTypes.bool.isRequired,
    shouldSignUpShow: PropTypes.bool.isRequired,
    shouldSignInShow: PropTypes.bool.isRequired,
    openSignIn: PropTypes.func.isRequired,
    openDefault: PropTypes.func.isRequired,
    openRemindPassword: PropTypes.func.isRequired,
    openSignUp: PropTypes.func.isRequired,
    large: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    const { large } = this.props;

    this.state = {
      signUpActualForm: 1,
      signUpQuantityOfForms: undefined,
      signUpInfoData: large.signUpInfoData,
    };
  }

  componentDidMount() {
    const { signUpInfoData } = this.state;

    this.setState({
      signUpQuantityOfForms: signUpInfoData.length,
    });
  }

  nextForm = () => {
    const { signUpActualForm, signUpQuantityOfForms } = this.state;
    const { openDefault } = this.props;

    if (signUpActualForm < signUpQuantityOfForms) {
      this.setState({
        signUpActualForm: signUpActualForm + 1,
      });
    } else {
      openDefault();

      setTimeout(() => {
        this.setState({
          signUpActualForm: 1,
        });
      }, 500);
    }
  };

  previousForm = () => {
    const { signUpActualForm } = this.state;
    const { openDefault } = this.props;

    if (signUpActualForm === 1) {
      openDefault();
    } else {
      this.setState({
        signUpActualForm: signUpActualForm - 1,
      });
    }
  };

  render() {
    const {
      // state:
      shouldFlip,
      shouldRemindPasswordShow,
      shouldSignUpShow,
      shouldSignInShow,
      // funkcje:
      openSignIn,
      openDefault,
      openRemindPassword,
      openSignUp,
    } = this.props;

    const { signUpInfoData, signUpActualForm } = this.state;

    return (
      <Wrapper shouldFlip={shouldFlip}>
        <RemindPassword
          openSignIn={openSignIn}
          shouldShow={shouldRemindPasswordShow}
        />

        <SignIn
          shouldShow={shouldSignInShow}
          openDefault={openDefault}
          openRemindPassword={openRemindPassword}
          openSignUp={openSignUp}
        />

        <SignUp
          shouldShow={shouldSignUpShow}
          openDefault={openDefault}
          signUpInfoData={signUpInfoData}
          signUpActualForm={signUpActualForm}
          nextForm={e => this.nextForm(e)}
          previousForm={e => this.previousForm(e)}
        />
      </Wrapper>
    );
  }
}

export default Back;
