import React, {useState} from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import RenderStatusBar from './statusBar';
import {useSelector} from 'react-redux';

const RenderLoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cred = {email, password};
  const RenderLogo = () => {
    return (
      <View style={styles.logo}>
        <Image source={require('../assets/frame1.png')} />
      </View>
    );
  };

  const RenderTitle = () => {
    return <Text style={styles.title}>Sign in to Your Account</Text>;
  };

  const RenderCredentials = () => {
    return (
      <View style={styles.cred}>
        <View style={styles.input}>
          <Image style={styles.icons} source={require('../assets/mail.png')} />
          <TextInput
            editable
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.input}>
          <Image style={styles.icons} source={require('../assets/lock.png')} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
      </View>
    );
  };

  const RenderForgetPassword = () => {
    return <Text style={styles.forgotPass}>forgot password?</Text>;
  };

  const RenderSignInButton = () => {
    const MyCred = useSelector(state => state.auth);
    return (
      <Pressable
        onPress={() => {
          if (MyCred.email === email && MyCred.password === password) {
            navigation.navigate('homeScreen');
          } else {
            Alert.alert("Incorrect Credentials")
          }
          // auth()
          //   .signInWithEmailAndPassword(email, password)
          //   .then(() => {
          //     navigation.navigate('homeScreen');
          //   })
          //   .catch(error => {
          //     if (error.code === 'auth/invalid-email')
          //       Alert.alert('Incorrect Email.');
          //     else if (error.code === 'auth/user-not-found')
          //       Alert.alert('No User Found');
          //     else {
          //       Alert.alert('Please check your password');
          //     }
          //   });
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#572B79' : 'white',
          },
          styles.button,
        ]}>
        <Text style={styles.innerText}>Sign in</Text>
      </Pressable>
    );
  };

  const RenderSignUp = () => {
    return (
      <Pressable
        style={styles.signUp}
        onPress={() => {
          navigation.navigate('signUpScreen');
        }}>
        <Text>Don't have an account?</Text>
        <Text style={styles.signUpText}> Sign up</Text>
      </Pressable>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <RenderStatusBar statusBarColor={'white'} />
      {RenderLogo()}
      {RenderTitle()}
      {RenderCredentials()}
      {RenderForgetPassword()}
      {RenderSignInButton({navigation})}
      {RenderSignUp()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FC',
  },
  logo: {
    paddingTop: 174,
    paddingLeft: 110,
  },
  title: {
    fontFamily: 'Urbanist',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 55,
    color: '#050308',
    fontWeight: 'bold',
  },
  input: {
    height: 58,
    width: 330,
    marginLeft: 33,
    borderWidth: 0.2,
    borderRadius: 4,
    marginTop: 10,
    padding: 10,
    color: '#ECE1F4',
    flexDirection: 'row',
  },
  icons: {
    margin: 8,
  },
  cred: {
    marginTop: 20,
  },
  forgotPass: {
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'Urbanist',
    color: '#20102D',
    marginTop: 10,
    marginRight: 30,
  },
  button: {
    backgroundColor: '#572B79',
    height: 58,
    width: 340,
    borderRadius: 5,
    marginTop: 80,
    marginLeft: 28,
  },
  innerText: {
    textAlign: 'center',
    paddingTop: 15,
    fontFamily: 'Urbanist',
    fontSize: 18,
    color: '#FAF8FC',
  },
  signUp: {
    flexDirection: 'row',
    marginLeft: 100,
    marginTop: 30,
  },
  signUpText: {
    fontWeight: 'bold',
  },
});

export default RenderLoginPage;
