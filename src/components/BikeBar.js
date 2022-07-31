import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const BikeBar = (props) => {
  const { title = "Login with Gmail" } = props;
  const { name = "login with Apple" } = props;
  return (
    <View style={styles.viewStyle}>
      <View style={styles.alex}>
        <Text style={styles.text1}>Welcome to</Text>
        <Text style={styles.text2}>Power Bike Shop</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IscwP_W7guZ_oBCbFV-EpotU376KiO76RQ&usqp=CAU",
        }}
      />
      <View style={styles.liman}>
        <AntDesign style={styles.kwabs} name="google" size={24} color="black" />
        <Pressable style={styles.button} onPress={() => console.log("Touch")}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      </View>
      <View style={styles.james}>
        <AntDesign style={styles.dani} name="apple-o" size={24} color="black" />
        <Pressable style={styles.button} onPress={() => console.log("Touch")}>
          <Text style={styles.text3}>{name}</Text>
        </Pressable>
      </View>
      <TouchableOpacity style={styles.girl}>
        <Text style = {styles.yeboah}>Not a member?</Text>
        <Button style={styles.butt} title="Sign up" color={"orange"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text2: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 100,
    top: 200,
  },
  text1: {
    fontSize: 25,
    top: 295,
    alignSelf: "center",
    marginTop: 50,
  },
  viewStyle: {
    // flexDirection: "column",
    // justifyContent: "center",
  },
  liman: {
    // flexDirection: "row",
    // justifyContent: "center",
    // borderWidth: 0.5,
    // borderColor: "gray",
    // borderRadius: 5,
    // height: 50,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    margin: 10,
    alignSelf: "center",
    backgroundColor: "gray",
    width: 300,
    top: 10,
  },
  kwabs: {
    padding: 5,
    marginVertical: 10,
    alignSelf: "center",
    bottom: 2,
    left: 2,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    bottom: 100,
    bottom: 130,
    alignSelf: "center",
    borderRadius: 20,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    marginBottom: 20,
  },
  james: {
    // borderWidth: 0.5,
    // borderColor: "gray",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    margin: 10,
    alignSelf: "center",
    backgroundColor: "black",
    width: 300,
  },
  dani: {
    color: "white",
    padding: 5,
    marginVertical: 10,
    alignSelf: "center",
    bottom: 2,
    left: 2,
  },
  text3: {
    color: "white",
    fontSize: 20,
  },
  girl: {
    flexDirection: "row",
    justifyContent: "center",
    top:-15
  },
  yeboah:{
    fontSize:15,
    opacity:0.2,
    top:10,
    
    
    
  }
});

export default BikeBar;
