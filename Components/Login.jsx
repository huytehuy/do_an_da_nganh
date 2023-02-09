import React, { useRef,useState,Component }from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  Pressable,
  Dimensions,
  state,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/AntDesign";
import { Image } from "react-native";
const Login = () => {
//   // fadeAnim will be used as the value for opacity. Initial Value: 0
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {
//     // Will change fadeAnim value to 0 in 3 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   };

  const [username, onChangeText] = React.useState("Example@abc.com");
  const [password, onChangeNumber] = React.useState("Character [6-20]");

  const [isActive, setActive] = React.useState(true);
  const hover= styles.hover
  const input = styles.input
  const hello = styles.hello
  const ref_input2 = useRef();


  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
        //   {
        //     // Bind opacity to animated value
        //     opacity: fadeAnim,
        //   },
        ]}
      >
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
        <Text style={{ fontSize: 20 }}>Welcome back!</Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Log in to your Account
        </Text>
        <Text
          style={{
            width: 0.8 * Dimensions.get("window").width - 30,
            marginLeft: 0,
            fontSize: 18,
          }}
        >
          E-Mail
        </Text>
        <View style={styles.flex}>
          <Icon name="user" size={30}></Icon>
          
          <TextInput
            placeholder={username}
            style={[styles.hover,styles.input]}
            returnKeyType = "next"
            autoFocus = {true}
            onSubmitEditing={() => ref_input2.current.focus()}
          ></TextInput>
        </View>

        <Text
          style={{
            width: 0.8 * Dimensions.get("window").width - 30,
            marginLeft: 0,
            fontSize: 18,
          }}
        >
          Password
        </Text>
        <View style={styles.flex}>
          <Icon name="lock" size={30}></Icon>
          <TextInput
            placeholder={password}
            secureTextEntry={true}
            style={[styles.input, styles.hover]}
            ref={ref_input2}
          ></TextInput>
        </View>
        <View style={styles.button_login}>
          <Text style={styles.sign_in}>Sign In</Text>
        </View>
      </Animated.View>
      {/* <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    height: "80%",
    width: "100%",
    backgroundColor: "powderblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
  button_login: {
    height: 40,
    width: 80,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "coral",
    marginTop:10
  },
  sign_in: {
    color: "white",

  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hover: {
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "coral",
    backgroundColor:"white",
    // borderRadius:30,
    paddingLeft:10
  },
  hello: {
    // borderLeftColor:'coral',
    // borderRightColor:'coral',
    // borderTopColor:'coral',
    // borderBottomColor:'coral',\
    color: "red",
  },
});

export default Login;
