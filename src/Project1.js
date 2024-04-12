import { StyleSheet, Text, View } from 'react-native';

const Project1 =() => {
  return (
    <View style={styles.HelloWorld}>
      <Text style={styles.textHelloWorld}>Hello World!</Text>
    </View>
  );
}

export default Project1;

const styles = StyleSheet.create({
  HelloWorld: {
    width:100,
    height:100,
    backgroundColor:"aqua",
    alignItems:"center",
    justifyContent:"center"
  },
  textHelloWorld:{
    color:"black"
  }
});
