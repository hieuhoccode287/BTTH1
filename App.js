
import React from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Project1 from './src/Project1';
import Project2 from './src/Project2';
import Project3 from './src/Project3';
import Project4 from './src/Project4';
import Project5 from './src/Project5';
import Project6 from './src/Project6';
import Project7 from './src/Project7';
import Project8 from './src/Project8';
import Cacualator from './src/Phan2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project1" component={Project1} />
        <Stack.Screen name="Project2" component={Project2} />
        <Stack.Screen name="Project3" component={Project3} />
        <Stack.Screen name="Project4" component={Project4} />
        <Stack.Screen name="Project5" component={Project5} />
        <Stack.Screen name="Project6" component={Project6} />
        <Stack.Screen name="Project7" component={Project7} />
        <Stack.Screen name="Project8" component={Project8} />
        <Stack.Screen name="Cacualator" component={Cacualator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{  }}>
      <Button style={styles.button} title="Project1" onPress={() => navigation.navigate('Project1')} />
      <Button style={styles.button} title="Project2" onPress={() => navigation.navigate('Project2')} />
      <Button style={styles.button} title="Project3" onPress={() => navigation.navigate('Project3')} />
      <Button style={styles.button} title="Project4" onPress={() => navigation.navigate('Project4')} />
      <Button style={styles.button} title="Project5" onPress={() => navigation.navigate('Project5')} />
      <Button style={styles.button} title="Project6" onPress={() => navigation.navigate('Project6')} />
      <Button style={styles.button} title="Project7" onPress={() => navigation.navigate('Project7')} />
      <Button style={styles.button} title="Project8" onPress={() => navigation.navigate('Project8')} />
      <Button style={styles.button} title="Cacualator" onPress={() => navigation.navigate('Cacualator')} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
