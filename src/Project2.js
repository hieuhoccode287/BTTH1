import { StyleSheet,TouchableOpacity, View, Button,Text } from "react-native"

const Project2 =()=>{
    return (
        <View style={styles.container}>
        <Button title="Button 1" onPress={() => alert("hello 1")} />
        <TouchableOpacity onPress={() => alert("hello 2!")} style={styles.touchable}>
            <Text style={{color: "white", fontSize: 18 }}>Button 2</Text>
        </TouchableOpacity>
        </View>
    )
}
export default Project2;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center' 
    },
    touchable:{
        backgroundColor: "blue",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
    }
  });