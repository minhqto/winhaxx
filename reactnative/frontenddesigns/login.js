import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.rectStack}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("./assets/images/Gradient_LZGIVfZ.png")}
          >
            <View style={styles.rect2}>
              <View style={styles.rect7Stack}>
                <View style={styles.rect7}></View>
                <TextInput
                  placeholder="Name"
                  placeholderTextColor="rgba(238,238,238,1)"
                  style={styles.textInput}
                ></TextInput>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.form}>
            <View style={styles.buttonStackStack}>
              <View style={styles.buttonStack}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("SignUp")}
                  style={styles.button}
                >
                  <Text style={styles.letsBegin}>Let&#39;s Begin!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("SignUp")}
                  style={styles.button2}
                >
                  <View style={styles.username2Column}>
                    <View style={styles.username2}>
                      <EvilIconsIcon
                        name="user"
                        style={styles.icon222}
                      ></EvilIconsIcon>
                      <TextInput
                        placeholder="Username"
                        placeholderTextColor="rgba(255,255,255,1)"
                        secureTextEntry={false}
                        style={styles.usernameInput2}
                      ></TextInput>
                    </View>
                    <View style={styles.password2}>
                      <EvilIconsIcon
                        name="lock"
                        style={styles.icon23}
                      ></EvilIconsIcon>
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor="rgba(255,255,255,1)"
                        secureTextEntry={false}
                        style={styles.passwordInput2}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.username2ColumnFiller}></View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Channels")}
                    style={styles.button22}
                  >
                    <Text style={styles.text22}>Get Started</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
              <View style={styles.password}>
                <EvilIconsIcon name="lock" style={styles.icon2}></EvilIconsIcon>
              </View>
              <View style={styles.username}>
                <EvilIconsIcon
                  name="user"
                  style={styles.icon22}
                ></EvilIconsIcon>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.usernameInput}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812
  },
  background: {
    height: 812
  },
  rect: {
    top: 0,
    left: 0,
    height: 812,
    position: "absolute",
    right: 0
  },
  rect_imageStyle: {
    opacity: 0.54
  },
  rect2: {
    width: 102,
    height: 111,
    marginTop: 129,
    marginLeft: 137
  },
  rect7: {
    left: 23,
    height: 8,
    backgroundColor: "rgba(255,244,230,1)",
    position: "absolute",
    right: 23,
    bottom: 6
  },
  textInput: {
    top: 0,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 50
  },
  rect7Stack: {
    flex: 1,
    marginLeft: -21,
    marginRight: -20
  },
  form: {
    top: 329,
    left: 41,
    height: 230,
    position: "absolute",
    right: 41
  },
  button: {
    left: 0,
    height: 59,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: 5
  },
  letsBegin: {
    color: "rgba(255,255,255,1)",
    fontSize: 1,
    marginTop: 23,
    marginLeft: 110
  },
  button2: {
    top: 0,
    left: 0,
    height: 230,
    position: "absolute",
    right: 0
  },
  username2: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon222: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password2: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon23: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  username2Column: {},
  username2ColumnFiller: {
    flex: 1
  },
  button22: {
    width: 293,
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center"
  },
  text22: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  buttonStack: {
    top: 0,
    left: 0,
    height: 230,
    position: "absolute",
    right: 0
  },
  password: {
    top: 86,
    left: 0,
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    position: "absolute",
    right: 0,
    opacity: 1,
    borderRadius: 5,
    justifyContent: "center"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20
  },
  username: {
    top: 0,
    left: 0,
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    position: "absolute",
    right: 0,
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  buttonStackStack: {
    height: 230
  },
  rectStack: {
    height: 812
  }
});

export default Index;
