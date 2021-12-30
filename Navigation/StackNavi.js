import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SubjectBook = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    getSubject();
    return () => {

    }
  }, [])

  getSubject = () => {
    const apiURL = 'http://www.tinhbui.somee.com/api/ServiceController/GetAllSubject';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson)
      }).catch((error) => {
        console.log('Error:', error);
      }).finally(() => setLoading(false))
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('BookList', {
        Mcd: item.Mcd
      }); }}>
        <View style={styles.item}>
          <View style={styles.wraptext}>
            <Text style={styles.title}>{item.Ten_chu_de}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {isloading ? <ActivityIndicator /> : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
          keyExtractor={item => `key-${item.Mcd}`}

        />
      )}
    </SafeAreaView>
  );
}

const BookList = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    getBook();
    return () => {

    }
  }, [])

  getBook = () => {
    const apiURL = 'http://www.tinhbui.somee.com/api/ServiceController/GetBooksBySubjectID?macd=' + route.params.Mcd;
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson)
      }).catch((error) => {
        console.log('Error:', error);
      }).finally(() => setLoading(false))
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{ uri: item.Hinh_minh_hoa}}
            resizeMode='contain'
          />
          <View style={styles.wraptextbook}>
            <Text style={styles.title}>{item.Ten_sach}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {isloading ? <ActivityIndicator /> : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
          keyExtractor={item => `key-${item.Ms}`}
        />
      )}
    </SafeAreaView>
  );
}

export default App = () => {

  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="SubjectBook">
        <Stack.Screen name="SubjectBook" component={SubjectBook} />
        <Stack.Screen name="BookList" component={BookList} />
      </Stack.Navigator>
    // </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  list: {
    flex: 1,
    padding: 10
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.25
  },
  image: {
    width: 100,
    height: 150,
    borderRadius:5
  },
  wraptext: {
    flex: 1,
    margin: 1,
    justifyContent: 'center',
    backgroundColor: 'aqua',
    height:50,
    paddingLeft:10

  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  wraptextbook:{
    flex: 1,
    margin: 1,
    justifyContent: 'center',
    paddingLeft:10,
  }
})