import React, {useState, useRef} from 'react';
import {View, StyleSheet, StatusBar, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import {useTheme} from '../function/theme';
import {Logo, Slice, ScreenH, ScreenW} from '../function/exportAsset';
import axios from 'axios';

const Login = ({navigation}) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editText, setEditText] = useState(true);

  const login = async () => {
    if (!email || !password) {
      console.log('Please enter valid login credentials');
      return;
    }

    try {
      const response = await axios.post('https://api.anveraesports.com/api/v1/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };


  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar
        barStyle={theme.statusBarContent}
        backgroundColor="transparent"
        translucent={true}
      />

      {/* Background Design */}
      <Slice width="100%" height="50%" style={styles.sliceStyle} />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo height={80} opacity={0.8} />
      </View>

      <View style={{paddingVertical: 50}}>
        {/* Email Input Field */}
        <View style={[styles.inputContainer]}>
          <TextInput
            placeholder="Registration No."
            keyboardType="default"
            style={[styles.input, {color: theme.TextColor_Secondary}]}
            placeholderTextColor={theme.placeholder}
            value={email}
            editable={editText}
            onChangeText={setEmail}
          />
        </View>
        <View style={[styles.inputContainer]}>
          <TextInput
            placeholder="Password"
            keyboardType="default"
            style={[styles.input, {color: theme.TextColor_Secondary}]}
            placeholderTextColor={theme.placeholder}
            value={password}
            editable={editText}
            onChangeText={setPassword}
          />
        </View>
        <TouchableWithoutFeedback onPress={login}>
            <View
              style={{
                width: '77%',
                backgroundColor: theme.schedule_Secondarybg,
                paddingVertical: 20,
                borderRadius: 16,
                alignContent: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 50,
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
            </View>
        </TouchableWithoutFeedback>
      </View>

      {/* Footer Text */}
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>
          LPU{' '}
          <Text style={[styles.footerText, {color: theme.TextColor_Secondary}]}>
            Touch
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  sliceStyle: {
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    opacity: 0.4,
  },
  logoContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
    width: ScreenW * 0.85,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  input: {
    fontSize: ScreenW * 0.045,
    fontWeight: 'bold',
  },
  footerTextContainer: {
    position: 'absolute',
    bottom: ScreenH * 0.05,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: ScreenW * 0.042,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default Login;
