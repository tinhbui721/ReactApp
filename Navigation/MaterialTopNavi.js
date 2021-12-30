import { StyleSheet, Button, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();


const HomeScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    );
  }
  

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
}

const Setting = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Setting</Text>
    </View>
  );
}

export default function MaterialTopNavi() {
  return (
    // <NavigationContainer> 
        <Tab.Navigator screenOptions={{
          tabBarStyle:{marginTop:20}
        }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize:30
  },
});