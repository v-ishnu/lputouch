import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import {Radar} from 'lucide-react';
import {useTheme} from '../../function/theme';
import Marks from '../../assets/icon/marks.svg';
import Message from '../../assets/icon/message-circle.svg';

export const ScreenW = Dimensions.get('window').width;
export const ScreenH = Dimensions.get('window').height;

const images = [
  {
    id: '1',
    icon: Message,
    value: '12',
    title: 'Announcement',
    type: 'big',
    itemIcon: 'bigIcon',
  },
  {
    id: '2',
    icon: Message,
    value: '85%',
    title: 'Attendence',
    type: 'small',
    itemIcon: 'smallIcon',
  },
  {
    id: '3',
    icon: Message,
    value: '2',
    title: 'Assignement',
    type: 'big',
    itemIcon: 'bigIcon',
  },
  {
    id: '4',
    icon: Marks,
    value: '8.2',
    title: 'Marks',
    type: 'big',
    itemIcon: 'bigIcon',
  },
  {
    id: '5',
    icon: Message,
    value: '',
    title: 'Exam',
    type: 'small',
    itemIcon: 'smallIcon',
  },
  {
    id: '6',
    icon: Message,
    value: '',
    title: 'Study Material',
    type: 'big',
    itemIcon: 'bigIcon',
  },
];

const PinterestGrid = () => {
  const theme = useTheme();
  const renderColumn = columnItems => (
    <View style={styles.column}>
      {columnItems.map(item => {
        const iconStyle =
          item.itemIcon === 'bigIcon' ? styles.bigIcon : styles.smallIcon;

        return (
          <View
            key={item.id}
            style={[
              styles.itemContainer,
              item.type === 'big' ? styles.big : styles.small,
              {backgroundColor: theme.CBgColor},
            ]}>
            {/* Icon */}
            <View
              style={[
                iconStyle,
                {backgroundColor: theme.schedule_Secondarybg},
              ]}>
              <View style={{alignItems: 'center', justifyContent: 'center', alignContent:'center', alignSelf:'center'}}>
                <item.icon fill="#E5C5C0" />
              </View>
            </View>

            <View>

                <Text
                  style={[
                    styles.text,
                    item.type === 'big' ? styles.bigVtext : styles.smallVtext,
                    {color: theme.TextColor_Primary},
                  ]}>
                  {item.value}
                </Text>

              <Text
                style={[
                  styles.text,
                  item.type === 'big' ? styles.bigTtext : styles.smallTtext,
                  {color: theme.TextColor_Secondary},
                ]}>
                <Text>{item.id === '4' ? 'CGPA' : item.title}</Text>
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );

  // Split data into two columns
  const leftColumn = images.filter((_, index) => index % 2 === 0);
  const rightColumn = images.filter((_, index) => index % 2 !== 0);

  return (
    <View style={styles.container}>
      {renderColumn(leftColumn)}
      {renderColumn(rightColumn)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  itemContainer: {
    borderRadius: 18,
    marginBottom: 18,
    position: 'relative', // Ensures absolute positioning inside works
  },
  iconContent: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },

  big: {
    flexDirection: 'column',
    height: 220,
    backgroundColor: 'white',
  },
  small: {
    flexDirection: 'row',
    height: 110,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 10,
  },

  iconStyle:{
      alignItems: 'center', // Center horizontally
      justifyContent: 'center', // Center vertically
    },
  bigIcon: {
    width: ScreenW * 0.12,
    height: ScreenW * 0.12,
    borderRadius: 7,
    marginTop: ScreenH * 0.036,
    marginLeft: ScreenW * 0.045,
    marginBottom: ScreenH * 0.025,
  },
  smallIcon: {
    width: ScreenW * 0.11,
    height: ScreenW * 0.11,
    marginLeft: ScreenW * 0.03,
    borderRadius: 7,
    // justifyContent:'center',
    alignSelf: 'center',
  },
  bigVtext: {
    marginLeft: ScreenW * 0.045,
    fontSize: ScreenW * 0.095,
    fontWeight: '900',
  },

  smallVtext: {
    fontSize: ScreenW * 0.045,
    fontWeight: '800',
  },
  bigTtext: {
    marginLeft: ScreenW * 0.045,
    fontSize: ScreenW * 0.055,
    opacity: 0.5,
    fontWeight: '600',
  },

  smallTtext: {
    fontSize: ScreenW * 0.045,
    fontWeight: '600',
  },
});

export default PinterestGrid;
