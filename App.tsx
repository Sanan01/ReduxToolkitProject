import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RenderLoginPage from './src/components/signInPage';
import RenderSignUpPage from './src/components/signupPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RenderCartPage from './src/components/cartPage';
import BottomBar from './src/components/homePage';
import RenderDashboardPage from './src/components/dashboard';
import {store} from './src/store/store';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="loginScreen" component={RenderLoginPage} />
        <Stack.Screen name="signUpScreen" component={RenderSignUpPage} />
        <Stack.Screen name="homeScreen" component={BottomBar} />
        <Stack.Screen name="Dashboard" component={RenderDashboardPage} />
        <Stack.Screen name="Cart" component={RenderCartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
