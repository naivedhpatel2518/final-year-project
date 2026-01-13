import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import StudentHomeScreen from './screens/StudentHomeScreen';
// import FacultyHomeScreen from './screens/FacultyHomeScreen'; // Optional

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const role = await AsyncStorage.getItem('role');
        if (token && role) {
          setUserRole(role);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userRole === 'student' ? (
          <Stack.Screen name="StudentHome" component={StudentHomeScreen} options={{ title: 'Student Dashboard' }} />
        ) : userRole === 'faculty' ? (
           // Placeholder for Faculty
           <Stack.Screen name="StudentHome" component={StudentHomeScreen} options={{ title: 'Student Dashboard' }} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
