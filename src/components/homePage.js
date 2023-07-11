import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import RenderSettingPage from './settingPage';
import RenderProfilePage from './profilePage';
import RenderDashboardPage from './dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const BottomBar = () => {

  const RenderCustomKey = ({children, onPress}) => {
    return (
      <TouchableOpacity
        style={{
          top: -20,
          elevation: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <View
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
            backgroundColor: '#572B79',
            elevation: 5,
          }}>
          {children}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          height: 90,
          elevation: 0,
          borderRadius: 20,
          backgroundColor: '#ffffff',
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={RenderDashboardPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/homeicon.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#572B79' : '#748c94',
                }}
              />
              <Text style={{color: focused ? '#572B79' : '#748c94'}}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RenderProfilePage}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../assets/profileicon.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#ffffff',
                }}
              />
            </View>
          ),
          tabBarButton: props => <RenderCustomKey {...props} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={RenderSettingPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/setting.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 15,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#572B79' : '#748c94',
                }}
              />
              <Text style={{color: focused ? '#572B79' : '#748c94'}}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
