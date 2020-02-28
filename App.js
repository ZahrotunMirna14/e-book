import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MenuLogin from './src/pages/MenuLogin';
import MenuPage from './src/pages/MenuPage';
import signup from './src/pages/signup';
import LoginPage from './src/pages/LoginPage';
import materi from './src/pages/materi';
import sc from './src/pages/materi/sc';
import dasar from './src/pages/materi/dasar';
import unsur from './src/pages/materi/unsur';
import fungsi from './src/pages/materi/fungsi';
import tujuan from './src/pages/materi/tujuan';
import manfaat from './src/pages/materi/manfaat';
import contoh from './src/pages/materi/contoh';
import partisipasi from './src/pages/materi/partisipasi';
import Quiz from './src/pages/quiz';
import about from './src/pages/about';



const RootStack = createStackNavigator(
  {
    menuLog: MenuLogin,
    Menu: MenuPage,
    Masuk: LoginPage,
    Daftar: signup,
    Materi: materi,
    Pengertian: sc,
    Dasarhukum : dasar,
    Unsur: unsur,
    Fungsi: fungsi,
    Tujuan : tujuan,
    Manfaat: manfaat,
    Contoh: contoh,
    Partisipasi: partisipasi,
    quiziz: Quiz,
    About: about,
    
  },
  {
    initialRouteName: "menuLog"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
