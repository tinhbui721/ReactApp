import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavi from './Navigation/StackNavi' 
import BottomTab from './Navigation/BottomTab' 
import DrawerNavi from './Navigation/DrawerNavi' 
import MaterialTopNavi from './Navigation/MaterialTopNavi';

export default function App() {
  return (
    <NavigationContainer>

      <StackNavi/>

      {/* <BottomTab/> */}

      {/* <MaterialTopNavi/> */}

      {/* <DrawerNavi/> */}

    </NavigationContainer>
  );
}
