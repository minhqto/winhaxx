import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundRow}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect6}
            imageStyle={styles.rect6_imageStyle}
            source={require("./assets/images/Gradient_LZGIVfZ.png")}
          ></ImageBackground>
        </View>
        <View style={styles.progressBarColumnColumn}>
          <View style={styles.progressBarColumn}>
            <View style={styles.progressBar}>
              <View style={styles.icon2Row}>
                <IoniconsIcon
                  name="md-checkmark-circle"
                  style={styles.icon2}
                ></IoniconsIcon>
                <View style={styles.rect4}></View>
                <EntypoIcon name="time-slot" style={styles.icon3}></EntypoIcon>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.icon2RowFiller}></View>
              <FontAwesomeIcon
                name="circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
            <Text style={styles.text3}>CREATE ACCOUNT</Text>
            <View style={styles.form}>
              <View style={styles.name}>
                <View style={styles.icon524RowColumn}>
                  <View style={styles.icon524Row}>
                    <EvilIconsIcon
                      name="user"
                      style={styles.icon524}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.nameInput}
                    ></TextInput>
                  </View>
                  <View style={styles.email}>
                    <EvilIconsIcon
                      name="envelope"
                      style={styles.icon6}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.emailInput}
                    ></TextInput>
                  </View>
                  <View style={styles.userType1}>
                    <EntypoIcon name="user" style={styles.icon523}></EntypoIcon>
                    <View style={styles.icon523Filler}>
                      <TextInput
                        placeholder="Client"
                        placeholderTextColor="rgba(255,255,255,1)"
                        secureTextEntry={false}
                        style={styles.client}
                      ></TextInput>
                      <View style={styles.userType2}>
                        <EntypoIcon
                          name="cog"
                          style={styles.icon522}
                        ></EntypoIcon>
                        <TextInput
                          placeholder="Business"
                          placeholderTextColor="rgba(255,255,255,1)"
                          secureTextEntry={false}
                          style={styles.business}
                        ></TextInput>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.icon524RowColumnFiller}></View>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon7}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.passwordInput}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.progressBarColumnFiller}></View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Timeline")}
            style={styles.continue}
          >
            <Text style={styles.text2}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 334,
    height: 812
  },
  background: {
    width: 3,
    height: 812
  },
  rect6: {
    width: 375,
    height: 819,
    marginTop: -7
  },
  rect6_imageStyle: {
    opacity: 0.54
  },
  progressBar: {
    height: 40,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 28
  },
  icon2: {
    color: "rgba(30,174,199,1)",
    fontSize: 40,
    width: 33,
    height: 40
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 40,
    marginLeft: 8,
    marginTop: 16
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 8,
    marginTop: 4
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.75,
    borderRadius: 40,
    marginLeft: 3,
    marginTop: 16
  },
  icon2Row: {
    height: 40,
    flexDirection: "row"
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 62,
    marginLeft: 43
  },
  form: {
    width: 293,
    height: 230,
    marginTop: 87
  },
  name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5
  },
  icon524: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33
  },
  nameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
    marginTop: 1
  },
  icon524Row: {
    height: 33,
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 17
  },
  email: {
    width: 293,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 39
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  emailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  userType1: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 107,
    marginLeft: 1,
    marginRight: 162
  },
  icon523: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 7,
    alignSelf: "center"
  },
  client: {
    top: 14,
    left: 61,
    height: 30,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 17,
    fontSize: 16
  },
  userType2: {
    top: -1,
    left: 163,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    right: -163,
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon522: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 7,
    alignSelf: "center"
  },
  business: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    flex: 1,
    marginRight: 17,
    marginLeft: 21,
    marginTop: 14
  },
  icon523Filler: {
    flex: 1
  },
  icon524RowColumn: {
    marginTop: 13
  },
  icon524RowColumnFiller: {
    flex: 1
  },
  password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: -171
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput: {
    height: 30,
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  progressBarColumn: {},
  progressBarColumnFiller: {
    flex: 1
  },
  continue: {
    width: 293,
    height: 55,
    backgroundColor: "rgba(31,178,204,1)",
    opacity: 1,
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    height: 18,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "impact-regular",
    alignSelf: "center"
  },
  progressBarColumnColumn: {
    width: 293,
    marginLeft: 38,
    marginTop: 58,
    marginBottom: 125
  },
  backgroundRow: {
    height: 812,
    flexDirection: "row"
  }
});

export default Index;
