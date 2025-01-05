import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import CourseScreen from "./CourseScreen ";
import SubjectScreen from "./SubjectScreen";
const Tab = createBottomTabNavigator();
const HomeScreen = ({ route }) => {
  const { student } = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Course") {
            iconName = "school";
          } else if (route.name === "Subjects") {
            iconName = "book-open";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#70116d",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        initialParams={{ student: student }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Course"
        component={CourseScreen}
        initialParams={{ student: student }}
      />
      <Tab.Screen
        name="Subjects"
        component={SubjectScreen}
        initialParams={{ student: student }}
      />
    </Tab.Navigator>
  );
};
export default HomeScreen;