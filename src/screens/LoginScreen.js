import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Button from 'react-native-button';
import {AppStyles} from '../AppStyles';
// import firebase from 'react-native-firebase';
import {AsyncStorage} from 'react-native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      email: '',
      password: '',
    };
  }

  onPressLogin = () => {
    const {email, password} = this.state;
    if (email.length <= 0 || password.length <= 0) {
      alert('Please fill out the required fields.');
      return;
    }
    const {navigation} = this.props;

    AsyncStorage.setItem('@loggedInUserID:id', '1234');
    AsyncStorage.setItem('@loggedInUserID:key', 'duongthanhoai1996@gmail.com');
    AsyncStorage.setItem('@loggedInUserID:password', '12345678x@X');
    navigation.dispatch({
      type: 'Login',
      user: {
        email: 'duongthanhoai1996@gmail.com',
        profileURL: '',
      },
    });
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(response => {
    //     const {navigation} = this.props;
    //     const user_uid = response.user._user.uid;
    //     firebase
    //       .firestore()
    //       .collection('users')
    //       .doc(user_uid)
    //       .get()
    //       .then(function(user) {
    //         if (user.exists) {
    //           AsyncStorage.setItem('@loggedInUserID:id', user_uid);
    //           AsyncStorage.setItem('@loggedInUserID:key', email);
    //           AsyncStorage.setItem('@loggedInUserID:password', password);
    //           navigation.dispatch({type: 'Login', user: user});
    //         } else {
    //           alert('User does not exist. Please try again.');
    //         }
    //       })
    //       .catch(function(error) {
    //         const {code, message} = error;
    //         alert(message);
    //       });
    //   })
    //   .catch(error => {
    //     const {code, message} = error;
    //     alert(message);
    //     // For details of error codes, see the docs
    //     // The message contains the default Firebase string
    //     // representation of the error
    //   });
  };

  onPressFacebook = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="E-mail or phone number"
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={() => this.onPressLogin()}>
          Log in
        </Button>
        <Text style={styles.or}>OR</Text>
        <Button
          containerStyle={styles.facebookContainer}
          style={styles.facebookText}
          onPress={() => this.onPressFacebook()}>
          Login with Facebook
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
});

export default LoginScreen;
