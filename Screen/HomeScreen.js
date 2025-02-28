import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../function/theme';

import {
  ScreenH,
  ScreenW,
  MenuIcon,
  MessageIcon,
  Arrow,
} from '../function/exportAsset';

import {transform} from 'react-native-svg-transformer';
import PinterestLayout from './Component/layout';

const scheduleData = [
  {
    id: 1,
    startTime: '08',
    endTime: '09',
    course: 'App developemnt with React Native',
    courseCode: 'CAP489',
    roomNo: '38-710',
    type: 'Complete',
    attendence: '83'
  },

  {
    id: 2,
    startTime: '09',
    endTime: '10',
    course: 'Open Source Web Developemnt',
    courseCode: 'CAP512',
    roomNo: '38-701',
    type: 'Complete',
    attendence: '89'
  },
  {
    id: 3,
    startTime: '10',
    endTime: '11',
    course: 'Data Structures and Algorithms',
    courseCode: 'CAP401',
    roomNo: '38-305',
    type: 'Active',
    attendence: '95'
},

{
    id: 4,
    startTime: '11',
    endTime: '12',
    course: 'Artificial Intelligence',
    courseCode: 'CAP550',
    roomNo: '38-402',
    type: 'Upcoming',
    attendence: '79'
},

{
    id: 5,
    startTime: '12',
    endTime: '13',
    course: 'Database Management Systems',
    courseCode: 'CAP420',
    roomNo: '38-601',
    type: 'Upcoming',
    attendence: '82'
},

{
    id: 6,
    startTime: '14',
    endTime: '15',
    course: 'Software Engineering',
    courseCode: 'CAP430',
    roomNo: '38-508',
    type: 'Upcoming',
    attendence: '73'
}

];

const HomeScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  // console.log(userData);

  return (
    <View style={{backgroundColor: theme.background, flex: 1}}>
      <View
        style={{
          height: ScreenH * 0.38,
          backgroundColor: theme.appBarbg,
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          flexDirection: 'column',
        }}>
        <StatusBar
          barStyle={theme.statusBarContent}
          backgroundColor="transparent"
          translucent={true}
        />
        {/* ============================= App bar ========================================= */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => navigation.openDrawer()}>
            <MenuIcon height={22} style={{color: theme.sidebarMenu}} />
          </TouchableOpacity>
          <Text
            style={{
              color: theme.TextColor_Primary,
              fontSize: ScreenW * 0.042,
              fontWeight: 800,
              flex: 1,
            }}>
            LPU{' '}
            <Text
              style={{
                color: theme.TextColor_Secondary,
                fontSize: ScreenW * 0.042,
                fontWeight: 400,
              }}>
              Touch
            </Text>
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              backgroundColor: '#E5C5C0',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MessageIcon
              width={22}
              style={{
                color: 'red',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        </View>

        {/* User Name */}
        <View style={{flex: 1}}>
          <Text
            style={{
              color: theme.TextColor_Primary,
              fontSize: ScreenW / 28,
              fontWeight: 700,
            }}>
            Howdy,
          </Text>
          {/* {data.map((user, index) => ( */}
          <Text
            style={{color: theme.TextColor_Secondary, fontSize: ScreenW / 35}}>
            Vishnu Prakash
          </Text>
          {/* ))} */}
        </View>

        {/* Scrollable Schedule */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row', // Ensures horizontal scrolling
          }}>
          {scheduleData.map((item, index) => (
            <View key={index} style={{marginRight: 10}}>
              <View
                style={{
                  width: ScreenW * 0.2,
                  height: ScreenH * 0.03,
                  backgroundColor: item.type === 'Active' ? '#f58220' : '#8B8B8B',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#E4E4E4',
                    fontSize: ScreenW / 35,
                    fontWeight: '500',
                  }}>
                  {item.type}
                </Text>
              </View>

              <View
                style={{
                  width: ScreenW * 0.87,
                  height: ScreenH * 0.11,
                  backgroundColor: theme.schedule_Secondarybg,
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopRightRadius: 14,
                  position: 'relative',
                  zIndex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingRight: ScreenW * 0.02,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '600',
                        fontSize: ScreenW * 0.064,
                      }}>
                      {item.startTime}
                    </Text>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '600',
                        fontSize: ScreenW * 0.024,
                      }}>
                      am
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 18,
                      height: 2,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 5,
                    }}
                  />
                  <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '600',
                        fontSize: ScreenW * 0.064,
                      }}>
                      {item.endTime}
                    </Text>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '600',
                        fontSize: ScreenW * 0.024,
                      }}>
                      am
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    width: '85%',
                    height: '100%',
                    backgroundColor: theme.schedule_bg,
                    borderBottomLeftRadius: 14,
                    borderTopRightRadius: 16,
                    borderBottomRightRadius: 16,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 2,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'baseline'}}>
                        <Text
                          style={{
                            color: theme.TextColor_Primary,
                            fontWeight: '600',
                            fontSize: ScreenW * 0.044,
                            paddingRight: 7,
                          }}>
                          {item.courseCode}
                        </Text>
                        <Text
                          style={{
                            color: theme.TextColor_Secondary,
                            fontWeight: '500',
                            fontSize: ScreenW * 0.03,
                            paddingRight: 5,
                          }}>
                          {item.roomNo}
                        </Text>
                        <Text
                          style={{
                            color: theme.TextColor_Secondary,
                            paddingRight: 5,
                          }}>
                          |
                        </Text>
                        <Text
                          style={{
                            fontSize: ScreenW * 0.03,
                            color: theme.TextColor_Secondary,
                            fontWeight: '500',
                            paddingRight: 5,
                          }}>
                          D2203
                        </Text>
                      </View>

                      <View style={{width: '80%'}}>
                        <Text
                          style={{
                            fontSize: ScreenW * 0.031,
                            color: theme.TextColor_Primary,
                            fontWeight: '700',
                          }}>
                          {item.course}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{flexDirection: 'column', alignItems: 'flex-end'}}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'baseline'}}>
                        <Text
                          style={{
                            color: theme.TextColor_Primary,
                            fontWeight: '600',
                            fontSize: ScreenW * 0.065,
                          }}>
                          {item.attendence}
                        </Text>
                        <Text
                          style={{
                            color: theme.TextColor_Primary,
                            fontWeight: '900',
                            fontSize: ScreenW * 0.03,
                          }}>
                          %
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: ScreenW * 0.03,
                          color: theme.TextColor_Secondary,
                          fontWeight: '700',
                          fontFamily: 'Product Sans Regular',
                        }}>
                        Attendance
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* View Time Table */}
        <View style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
          <View style={{flexDirection: 'row', flex: 1, paddingLeft: 10}}>
            <Text
              style={{
                color: theme.TextColor_Primary,
                fontSize: ScreenW / 30,
                paddingRight: 5,
              }}>
              1/5
            </Text>
            <Text
              style={{
                color: theme.TextColor_Secondary,
                fontSize: ScreenW / 30,
                fontWeight: 500,
              }}>
              Today Lecture
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingRight: 10,
              alignContent: 'baseline',
            }}>
            <Text
              style={{
                paddingRight: 5,
                color: theme.TextColor_Primary,
                fontWeight: 500,
              }}>
              View Table
            </Text>
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 20,
                backgroundColor: '#E5C5C0',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Arrow
                width={15}
                style={{
                  color: 'red',
                  transform: [{rotate: '180deg'}],
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* ============================================================================================================================================== */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <PinterestLayout />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
