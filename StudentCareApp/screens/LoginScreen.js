import { View, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import banner from "../assets/banner.png";
import { Text, TextInput, Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Error from "../components/Error";
import { useNavigation } from "@react-navigation/native";
import { students } from "../assets/data/StudentDb";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (userName === "" || password === "") {
      setError(true);
      return;
    }
    const student = students.find(
      (student) =>
        student.username === userName && student.password === password
    );

    if (student) {
      navigation.navigate("Home", { student });
      setError(false);
      setUserName("");
      setPassword("");
    } else {
      setError(true);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={banner} style={styles.image} resizeMode="contain" />
        <Text variant="headlineLarge" style={styles.title}>
          Student Login
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Username"
            mode="outlined"
            value={userName}
            theme={{
              colors: {
                background: "#fff",
                outline: "#424242",
                primary: "#000000",
                placeholder: "#000000",
              },
            }}
            contentStyle={{ color: "#000000" }}
            style={styles.input}
            onChangeText={(text) => setUserName(text)}
          />
          <View>
            <TextInput
              label="Password"
              mode="outlined"
              value={password}
              secureTextEntry={showPassword ? false : true}
              theme={{
                colors: {
                  background: "#fff",
                  outline: "#424242",
                  primary: "#000000",
                  placeholder: "#000000",
                },
              }}
              contentStyle={{ color: "#000000" }}
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />
            {showPassword ? (
              <Ionicons
                name="eye-off"
                size={25}
                color="#000000"
                style={styles.eyeIcon}
                onPress={() => setShowPassword(false)}
              />
            ) : (
              <Ionicons
                name="eye"
                size={25}
                color="#000000"
                style={styles.eyeIcon}
                onPress={() => setShowPassword(true)}
              />
            )}
          </View>
          <Button
            mode="contained"
            buttonColor="#70116d"
            textColor="#fff"
            labelStyle={styles.buttonText}
            style={styles.button}
            onPress={handleLogin}
          >
            Login
          </Button>
          {error ? (
            <Error text="Please check your username and password" />
          ) : (
            <></>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 350,
    borderRadius: 10,
    marginTop: -25,
  },
  title: {
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 50,
    width: 400,
    paddingHorizontal: 16,
    gap: 20,
  },
  input: {
    fontSize: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eyeIcon: {
    position: "absolute",
    top: 19,
    right: 20,
  },
});

export default LoginScreen;