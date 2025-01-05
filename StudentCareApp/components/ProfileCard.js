import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
const ProfileCard = () => {
  return (
    <>
      <View style={styles.profileCardContainer}>
        <Image
          source={require("../assets/profilepic/1.jpg")}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <View>
          <Text variant="bodyLarge" style={styles.name}>
            Alice Jhonson
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            Alice Jhonson
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  profileCardContainer: {
    width: 400,
    height: 200,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 100,
    borderRadius: 10,
  },
  detailContainer: {},
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subDetails: {
    fontSize: 15,
  },
});
export default ProfileCard;