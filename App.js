import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider, useTheme } from './function/theme';
import { CustomDrawer, HomeScreen } from '././function/exportAsset';
import SplashScreen from '././Screen/Component/SplashScreen';
import LoginScreen from './Screen/Login';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function NavStack() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('SplashScreen');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        setTimeout(() => {
          if (token) {
            setInitialRoute('HomeScreen');
          } else {
            setInitialRoute('HomeScreen'); //LoginScreen
          }
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error reading AsyncStorage:', error);
        setInitialRoute('HomeScreen'); // Default to LoginScreen if an error occurs
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  // Show nothing while loading
  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={({ route }) => {
            const theme = useTheme();
            return {
              drawerStyle: {
                width: '72%',
                backgroundColor: theme.sidebarColor,
              },
            };
          }}
        >
          {/* Replace HomeScreen with NavStack */}
          <Drawer.Screen name="Home" component={NavStack} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
