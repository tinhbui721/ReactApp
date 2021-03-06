import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavi from './StackNavi'

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go to profile"
      />
      
    </View>
    // <StackNavi/>
  );
}

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const AboutUsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const SettingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


export default function App() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        // drawerPosition:'right',
        // headerTitleAlign:'center'
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="About us" component={AboutUsScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}
