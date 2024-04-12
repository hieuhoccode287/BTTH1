import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Project1 from './src/Project1';
import Project2 from './src/Project2';
import Project3 from './src/Project3';
import Project4 from './src/Project4';
import Project5 from './src/Project5';
import Project6 from './src/Project6';
import Project7 from './src/Project7';
import Project8 from './src/Project8';

export default function App() {
  const projects = [<Project1 />, <Project2 />, <Project3 />, <Project4 />, <Project5 />, <Project6 />, <Project7 />,<Project8 />];
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);

  const handleProjectPress = (index) => {
    setCurrentProjectIndex(index);
  }; 

  return (
    <View style={styles.container}>
      {projects.map((project, index) => (
        <TouchableOpacity key={index} onPress={() => handleProjectPress(index)} style={styles.button}>
          <Text style={styles.buttonText}>Open Project {index + 1}</Text>
        </TouchableOpacity>
      ))}
      {currentProjectIndex !== null && projects[currentProjectIndex]}
      <StatusBar style="auto" />
    </View>
  );
}

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
