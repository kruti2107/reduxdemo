import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Register from '../compoent/registration'
import Display from '../compoent/display'
import FlatListDemo from "../compoent/flatlist";
import UserDisplay from "../compoent/userdisplay";
import Login from "../compoent/login";
import LoginDemo from "../compoent/logindemo"
const AppContainer =createStackNavigator({
        LoginDemo,
        Display,
        Register,
        FlatListDemo,
        UserDisplay
},
    {
        headerMode:'none'
    });
export default createAppContainer(AppContainer);

