import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ViewLcd from "./ViewLcd";
import Main from "./Main";
import DetailLcd from "./DetailLcd";
import Post from "./Post";
import TambahPnjm from "./TambahPnjm";
import ProfilSaya from "./ProfilSaya";
import ViewPnjm from "./ViewPnjm";
import Login from "./Login"
import UpdateLcd from "./UpdateLcd";
import UpdatePnjm from "./UpdatePnjm";
import HapusPnjm from "./HapusPnjm";
import HapusLcd from "./HapusLcd";
import Upload from "./Upload";

const AppContainer = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    ViewLcd: {
      screen: ViewLcd
    },
    Upload: {
      screen: Upload
    },
    DetailLcd: {
      screen: DetailLcd
    },
    UpdateLcd: {
      screen: UpdateLcd
    },
    UpdatePnjm: {
      screen: UpdatePnjm
    },
    HapusPnjm: {
      screen: HapusPnjm
    },
    HapusLcd: {
      screen: HapusLcd
    },
    Main: {
      screen: Main
    },
    post: {
      screen: Post
    },
    TambahPnjm: {
      screen: TambahPnjm
    },
    ProfilSaya: {
      screen: ProfilSaya
    },
    ViewPnjm: {
      screen: ViewPnjm
    },
  },
  {
    initialRouteName: "Login"
  }
);
const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
