import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Front from './Front';
import Back from './Back';
import { Wrapper } from './styles';

class LargeForm extends Component {
  static propTypes = {
    large: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const { large } = this.props;

    this.state = {
      shouldSignInShow: false,
      shouldSignUpShow: false,
      shouldRemindPasswordShow: false,
      actualWidth: undefined,
      actualHeight: undefined,
      shouldFlip: undefined,
      defaultStyles: large.defaultStyles,
      remindPasswordStyles: large.remindPasswordStyles,
      signInStyles: large.signInStyles,
      signUpStyles: large.signUpStyles,
    };
  }

  componentDidMount() {
    const { defaultStyles } = this.state;

    this.setState({
      actualWidth: defaultStyles.width,
      actualHeight: defaultStyles.height,
      shouldFlip: defaultStyles.shouldFlip,
    });
  }

  openSignIn = () => {
    const { signInStyles } = this.state;

    this.setState({
      shouldSignInShow: true,
      shouldSignUpShow: false,
      shouldRemindPasswordShow: false,
      shouldFlip: signInStyles.shouldFlip,
    });

    setTimeout(() => {
      this.setState({
        actualWidth: signInStyles.width,
        actualHeight: signInStyles.height,
      });
    }, 450);
  };

  openSignUp = () => {
    const { signUpStyles } = this.state;

    this.setState({
      shouldSignUpShow: true,
      shouldSignInShow: false,
      shouldRemindPasswordShow: false,
      shouldFlip: signUpStyles.shouldFlip,
    });

    setTimeout(() => {
      this.setState({
        actualWidth: signUpStyles.width,
        actualHeight: signUpStyles.height,
      });
    }, 450);
  };

  openDefault = () => {
    const { defaultStyles } = this.state;

    this.setState({
      shouldFlip: defaultStyles.shouldFlip,
      shouldSignUpShow: false,
      shouldSignInShow: false,
    });

    setTimeout(() => {
      this.setState({
        actualWidth: defaultStyles.width,
        actualHeight: defaultStyles.height,
      });
    }, 150);

    setTimeout(() => {
      this.setState({
        actualWidth: defaultStyles.width,
        actualHeight: defaultStyles.height,
        shouldRemindPasswordShow: false,
      });
    }, 350);
  };

  openRemindPassword = () => {
    const { signUpStyles, remindPasswordStyles } = this.state;

    this.setState({
      shouldSignUpShow: false,
      shouldSignInShow: false,
      shouldRemindPasswordShow: true,
      shouldFlip: signUpStyles.shouldFlip,
    });

    setTimeout(() => {
      this.setState({
        actualWidth: remindPasswordStyles.width,
        actualHeight: remindPasswordStyles.height,
      });
    }, 450);
  };

  render() {
    const { large } = this.props;
    const {
      actualWidth,
      actualHeight,
      defaultStyles,
      shouldFlip,
      shouldRemindPasswordShow,
      shouldSignInShow,
      shouldSignUpShow,
    } = this.state;

    return (
      <Wrapper
        style={{
          width: actualWidth,
          height: actualHeight,
        }}
        width={defaultStyles.width}
        height={defaultStyles.height}
      >
        <Front
          openSignIn={e => this.openSignIn(e)}
          openSignUp={e => this.openSignUp(e)}
          shouldFlip={shouldFlip}
        />

        <Back
          large={large}
          openDefault={e => this.openDefault(e)}
          openRemindPassword={e => this.openRemindPassword(e)}
          openSignIn={e => this.openSignIn(e)}
          openSignUp={e => this.openSignUp(e)}
          shouldRemindPasswordShow={shouldRemindPasswordShow}
          shouldSignInShow={shouldSignInShow}
          shouldSignUpShow={shouldSignUpShow}
          shouldFlip={shouldFlip}
        />
      </Wrapper>
    );
  }
}

export default LargeForm;
