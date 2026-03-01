import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar, Users } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { View, StyleSheet } from 'react-native';
import { styles } from './RootNavigator.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DoctorDetailsScreen from '../screens/DoctorDetailsScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  DoctorDetails: undefined;
};

export type MainTabParamList = {
  Calendar: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <View style={StyleSheet.absoluteFill}>
            {/* Gradiente sutil de fundo */}
            <LinearGradient
              colors={['rgba(40,40,60,0.35)', 'rgba(20,20,40,0.45)']}
              style={StyleSheet.absoluteFill}
            />
            {/* Efeito de blur (vidro fosco) */}
            <BlurView
              tint="dark"
              intensity={30}
              style={StyleSheet.absoluteFill}
            />
            {/* Borda interna clara sutil */}
            <View style={styles.borderSurface} />
          </View>
        ),
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.iconActive,
        tabBarInactiveTintColor: Colors.iconInactive,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
      }}
    >
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconWrapper}>
              <Calendar color={color} size={size || 28} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconWrapper}>
              <Users color={color} size={size || 28} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetailsScreen} />
    </Stack.Navigator>
  );
};