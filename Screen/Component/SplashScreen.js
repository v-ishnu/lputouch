import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import {useTheme} from '../../function/theme';
import {Logo, Slice, ScreenH, ScreenW} from '../../function/exportAsset';

const SplashScreen = ({navigation}) => {
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar
        barStyle={theme.statusBarContent}
        backgroundColor="transparent"
        translucent={true}
      />
      <Slice
        width="100%"
        height="50%"
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          bottom: 0,
          opacity: 0.4,
        }}
      />

      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 250,
        }}>
        <View style={{}}>
          <Logo height={80} opacity={0.8} />
        </View>

        {/* Absolute Positioned Text at Bottom */}
        <View
          style={{
            position: 'absolute',
            bottom: ScreenH * 0.05, // Adjust bottom spacing if needed
            left: 0,
            right: 0,
            alignItems: 'center', // Centers horizontally
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: ScreenW * 0.042,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            LPU{' '}
            <Text
              style={{
                color: theme.TextColor_Secondary,
                fontSize: ScreenW * 0.042,
                fontWeight: '400',
              }}>
              Touch
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});
