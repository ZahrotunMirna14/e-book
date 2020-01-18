import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import menuLogin from './pages/menuLogin';
import Login from './component/Login';

const RootStack = createStackNavigator(
	{
		Login: LoginScreen,
		Menu: menuScreen,
	},
	{
	    initialRouteName: 'menuLogin',
	}	
);

export default createAppContainer(RootStack);