import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavi from './StackNavi'
import DrawerNavi from './DrawerNavi'
import Calculator from '../Calculator/Calulator'

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
}

const ProfileScreen = () => {
  const [people, setPeople] = useState([
    { name: 'Bùi Văn Tình', key: '19522354' },
    { name: 'Nguyen Van Hiếu', key: '19521509' },
    { name: 'Phạm Phúc Hậu', key: '19521485' },
  ]);
  return (
    <FlatList
      style={{ marginTop: 50 }}
      data={people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => { alert(item.name) }}>
          <Text style={{ margin: 5, backgroundColor: 'aqua', padding: 10, color: 'black', fontSize: 20 }}>
            {item.key + ":   " + item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const CalculatorScreen = () => {
  return (
    <Calculator />
  );
}

export default function BottomTab() {
  return (
    // <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 20, color: 'black', margin: 10 },
      tabBarStyle: { height: 80, justifyContent: 'center' },
      headerTitleAlign: 'center',
      //  headerShown: false,

    }}

    >
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarLabel: 'Home!!!'
        }}></Tab.Screen>
      <Tab.Screen name='Profile' component={ProfileScreen}></Tab.Screen>
      <Tab.Screen name='Calculator' component={CalculatorScreen}></Tab.Screen>
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});