import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/banner.png";
import React from "react";
import { Divider, Text } from "react-native-paper";
import { courses } from "../assets/data/StudentsDb";
const CourseScreen = ({ route }) => {
  const { student } = route.params;
  const course = courses.find((course) => course.id === student.course_id);
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.courseCard}>
          <Text variant="headlineMedium" style={styles.name}>
            {course.name}
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            Code: {course.course_code} | Dept: {course.department}
          </Text>
          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.courseInfoHeader}>
            Course Information
          </Text>
          <View style={styles.courseDetailsContainer}>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Code: {course.course_code}
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Department: {course.department}
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Duration: {course.duration}
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              {course.description}
            </Text>
          </View>
          <Divider style={styles.divider} bold={true} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>UOV © 2024</Text>
      </View>
    </>
  );
};
export default CourseScreen;