import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 

const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Navigate Details" onPress={() => {navigation.navigate('Details');}}/>
      <Text></Text>
      <Button title="Push Details" onPress={() => {navigation.push('Details');}}/>
      <Text></Text>
      <Button title="Replay Details" onPress={() => {navigation.replace('Details');}}/>
    </View>
  );
}

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="navigate home" onPress={() => {navigation.navigate('Home');}}/>
      <Text></Text>
      <Button title="Go back" onPress={() => {navigation.goBack();}}/>
      <Text></Text>
      <Button title="Pop to top" onPress={() => {navigation.popToTop();}}/>
      <Text></Text>
      <Button title="Push Details" onPress={() => {navigation.push('Details');}}/>
      <Text></Text>
      <Button title="Replay Home" onPress={() => {navigation.replace('Home');}}/>
    </View>
  );
}

export default function StackNavigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
        //   screenOptions={{headerShown:false}} 
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
