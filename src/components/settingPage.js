import React from 'react';
import {Text, SafeAreaView, FlatList, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const customData = require('./data.json');

const RenderData = ({item}) => {
  return (
    <View>
      <Text style={{paddingTop: 10, fontSize: 15}}>{item.name}</Text>
    </View>
  );
};
const RenderPersonalInfo = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={customData}
        renderItem={RenderData}
        vertical
        ItemSeparatorComponent={() => {
          return <View style={[{height: 15}]} />;
        }}
      />
    </SafeAreaView>
  );
};
const RenderGeneralSetting = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={customData}
        renderItem={RenderData}
        vertical
        ItemSeparatorComponent={() => {
          return <View style={[{height: 15}]} />;
        }}
      />
    </SafeAreaView>
  );
};
const RenderReport = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={customData}
        renderItem={RenderData}
        vertical
        ItemSeparatorComponent={() => {
          return <View style={[{height: 15}]} />;
        }}
      />
    </SafeAreaView>
  );
};

const RenderSettingPage = () => {
  return (
    <Tab.Navigator
      initialRouteName="General"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, color: 'white'},
        tabBarItemStyle: {width: 130},
        tabBarStyle: {backgroundColor: '#572B79'},
      }}>
      <Tab.Screen name="Personal" component={RenderPersonalInfo} />
      <Tab.Screen name="General" component={RenderGeneralSetting} />
      <Tab.Screen name="Report" component={RenderReport} />
    </Tab.Navigator>
  );
};

export default RenderSettingPage;
