import React,{Component} from 'react';
import {DrawerActions} from 'react-navigation'
import { createStackNavigator,createDrawerNavigator,createAppContainer } from 'react-navigation'
import Login from '../compoent/login';
import  FlatListDemo from '../compoent/flatlist'
import SliderDemo from "../compoent/slider";

const Login_Stack=createStackNavigator({
    LoginScreen:{
        screen:Login,
    }
    },
    {
        headerMode:'none'
    });

const flatlist_Stack=createStackNavigator({
    FlatList:{
        screen:FlatListDemo,
        navigationOptions:({navigation})=>({
          title:'FlatList',
        })
        }},
    {headerMode:'none'

});

const slider_stack=createStackNavigator({
    Slider:{
        screen:SliderDemo
    }
},{
    headerMode:'none'
})



const DrwaerNavigation=createDrawerNavigator({
    Screen1: {
        //Title
        screen: Login_Stack,
        navigationOptions: {
            drawerLabel: 'Login',
        },
    },
    Screen2: {
        //Title
        screen: flatlist_Stack,
        navigationOptions: {
            drawerLabel: 'FlatList',
        },
    },
    Screen3:{
        screen:slider_stack,
        navigationOptions:{
            drawerLabel:'Slider Demo'
        }
    }
},
    {
        headerMode:"none",
        drawerPosition:"right"
    });

export default createAppContainer(DrwaerNavigation);