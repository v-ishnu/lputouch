import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import { useTheme } from '../../function/theme';


export default customDrawer = (props) => {
  const theme = useTheme();

  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'red'}}>
        <ImageBackground/>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Log Out</Text>
      </View>
    </View>
  );
};