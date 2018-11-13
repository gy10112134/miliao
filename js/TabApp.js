import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {View, Image} from 'react-native';

import Home from './tabPage/Home';
import Type from './tabPage/Type';
import ShopCar from './tabPage/Message';
import Mine from './tabPage/Mine';

const Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: '首页',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},
            headerTitleStyle: {
                color: 'white',
                fontSize: 16,
                alignSelf: 'center'
            },
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor})=>(
                <Image
                    source={require('./image/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            )
        }
    },Type: {
        screen: Type,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '文章',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '文章',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_type.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    ShopCar: {
        screen: ShopCar,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '消息',

            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_shop_car.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的',

            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },

},{
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
    }
});

/*
 * 初始化StackNavigator
 */
export default Navi = StackNavigator({
    Tab: {
        screen: Tab
    },
});