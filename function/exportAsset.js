import React from "react";
import { Dimensions } from "react-native";


// Icons File ==============================================
import MenuIcon from '../assets/icon/menu.svg';
import MessageIcon from '../assets/icon/message.svg';
import Arrow from '../assets/icon/back.svg';
import AnnouncementIcon from '../assets/icon/message2.svg'


import Logo from '../assets/lpulogo.svg';
import Logo2 from '../assets/Slice2.png';

import Slice from '../assets/Slice.svg'


// Custom Drawer ===========================================

import CustomDrawer from "../Screen/Component/customDrawer";





// Import Screen=============================================
import HomeScreen from '../Screen/HomeScreen';
import SplashScreen from '../Screen/Component/SplashScreen'




const { width: ScreenW, height: ScreenH } = Dimensions.get('window');



export {
    ScreenH,
    ScreenW,

    // Icon
    MenuIcon,
    MessageIcon,
    Arrow,
    AnnouncementIcon,


    Logo,
    Logo2,
    Slice,

    // Custom Drawer
    CustomDrawer,


    // Screen
    HomeScreen,
    SplashScreen,
}
