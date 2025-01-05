import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/banner.png";
import React from "react";
import { Divider, Text } from "react-native-paper";
import { marks, subjects } from "../assets/data/StudentsDb";
const SubjectScreen = ({ route }) => {
  const { student } = route.params;
  const subjectList = subjects.filter(
    (subject) => subject.course_id === student.course_id
  );
  const marksList = marks.filter((mark) => mark.student_id === student.id);
  let sum = 0;
  marksList.forEach((mark) => {
    sum += mark.marks;
  });
  const average = sum / subjectList.length;
  const result = marksList.map((mark) => {
    const subject = subjectList.find(
      (subject) => subject.id === mark.subject_id
    );
    return {
      subjectName: subject?.name || "Unknown Subject",
      marks: mark.marks,
    };
  });
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.courseCard}>
          <Text variant="headlineMedium" style={styles.name}>
            Computer Science
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            {subjectList.length} Subjects | Average: {Math.floor(average)}
          </Text>
          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.marksInfoHeader}>
            Marks Information
          </Text>
          <View style={styles.markDetailsContainer}>
            <View style={styles.tableHeader}>
              <Text variant="bodySmall">Subject</Text>
              <Text variant="bodySmall">Marks</Text>
            </View>
            <Divider style={styles.secondDivider} bold={true} />
            {result &&
              result.map((result) => (
                <View key={result.subjectName}>
                  <View style={styles.tableData}>
                    <Text variant="bodyMedium" style={styles.tdText}>
                      {result.subjectName}
                    </Text>
                    <Text variant="bodyMedium" style={styles.tdText}>
                      {result.marks}
                    </Text>
                  </View>
                  <Divider style={styles.secondDivider} bold={true} />
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>UOV © 2024</Text>
      </View>
    </>
  );
};
export default SubjectScreen;