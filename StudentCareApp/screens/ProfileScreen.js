import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/banner.png";
import React from "react";
import { Divider, Text } from "react-native-paper";
const ProfileScreen = ({ route }) => {
  const { student } = route.params;
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.profileCard}>
          <Image
            source={student.profile_pic}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Text variant="headlineMedium" style={styles.name}>
            {student.name}
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            Age: {student.age} | Gender: {student.gender}
          </Text>
          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.contactHeader}>
            Contact Information
          </Text>
          <View style={styles.contactDetailsContainer}>
            <Text variant="bodySmall" style={styles.contactDetails}>
              Email: {student.email}
            </Text>
            <Text variant="bodySmall" style={styles.contactDetails}>
              Phone: {student.phone}
            </Text>
            <Text variant="bodySmall" style={styles.contactDetails}>
              Address: {student.address}
            </Text>
          </View>
          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.bilogicalHeader}>
            Biological Information
          </Text>
          <View style={styles.bilogicalDetailsContainer}>
            <Text variant="bodySmall" style={styles.bilogicalDetails}>
              Gender: {student.gender}
            </Text>
            <Text variant="bodySmall" style={styles.bilogicalDetails}>
              Age: {student.age}
            </Text>
            <Text variant="bodySmall" style={styles.bilogicalDetails}>
              Blood Group: {student.blood_group}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>UOV © 2024</Text>
        </View>
      </ScrollView>
    </>
  );
};
export default ProfileScreen;