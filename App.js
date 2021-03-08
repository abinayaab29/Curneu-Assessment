import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect } from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList,ActivityIndicator } from 'react-native';

const employeesURL = 'http://dummy.restapiexample.com/api/v1/employees';


const App = () => {

  const[isLoading,setLoading] = useState(true);
  const [data1,setData] = useState([]);

useEffect(() => {
  fetch(employeesURL).then((response) => response.json())
  .then((json) => {setData(json); console.log(json)})
  .catch((error) => alert(error))
  .finally(() => setLoading(false));
}, []);

  return ( 
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList 
          data1 = {data1}
          keyExtractor = {({id},index) => id}
          renderItem = {({item}) => (
            <Text>
            {item.employee_name}
            {item.employee_salary}
            {item.emplyee_age}
            {item.profile_image}
            </Text>
          )}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;