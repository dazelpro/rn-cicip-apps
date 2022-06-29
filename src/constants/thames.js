import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: '#FF0000', //red
    transparentPrimray: 'rgba(227, 120, 75, 0.4)',
    orange: '#FFA133',
    lightOrange: '#FFA133',
    lightOrange2: '#FDDED4',
    lightOrange3: '#FFD9AD',
    green: '#27AE60',
    red: '#FF1717',
    blue: '#0064C0',
    darkBlue: '#111A2C',
    darkGray: '#525C67',
    darkGray2: '#757D85',
    gray: '#898B9A',
    gray2: '#BBBDC1',
    gray3: '#CFD0D7',
    lightGray1: '#DDDDDD',
    lightGray2: '#F5F5F8',
    white2: '#FBFBFB',
    white: '#FFFFFF',
    black: '#000000',

    transparent: 'transparent',
    transparentBlack1: 'rgba(0, 0, 0, 0.1)',
    transparentBlack5: 'rgba(0, 0, 0, 0.5)',
    transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

export const SIZE = {
    width,
    height,
};

export const FONTS = {
    jktBold: {fontFamily: 'PlusJakartaSans-Bold'},
    jktLight: {fontFamily: 'PlusJakartaSans-Light'},
    jktMedium: {fontFamily: 'PlusJakartaSans-Medium'},
};

const appTheme = {COLORS, FONTS};

export default appTheme;
