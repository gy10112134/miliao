import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Alert, PixelRatio, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import px2dp from '../util/px2dp';

export default class Mine extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerRight: (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Setting')}>
                    <Image style={{ width: 40, height: 40, alignSelf: 'center', marginRight: 0, }}
                        source={require('../image/setting.png')} />
                </TouchableWithoutFeedback>
            </View>
        )
    });
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.head}>
                        <Image style={styles.logo}
                            source={require('../image/head.png')}></Image>
                        <Text style={{ color: 'white', marginTop: px2dp(10) }}>韩小枫</Text>
                    </View>

                    <View style={styles.list}>
                        <Item
                            icon="md-heart"
                            text="我的收藏"
                            subText="15篇"
                            iconColor="#32cd32"
                            onPress={this._onPressCallback.bind(this, 1)} />
                        <Item
                            icon="md-eye"
                            text="历史记录"
                            subText="100条"
                            onPress={this._onPressCallback.bind(this, 1)} />
                        <Item
                            icon="md-pricetag"
                            text="未读消息"
                            subText="9个"
                            onPress={this._onPressCallback.bind(this, 1)} />
                    </View>
                </ScrollView>
            </View>
        );
    }

    _onPressCallback(position) {
        switch (position) {
            case 1:
                this._alert();
                break;
            case 2:
                this._alert();
                break;
            case 3:
                this._alert();
                break;
        }
    }

    _alert() {
        Alert.alert(
            '提示',
            "功能暂未开发，哈哈哈哈",
            [{
                text: '好的', onPress: () => { }
            }]
        );
    }

}

class Item extends Component {
    render() {
        const { icon, iconColor, text, subText, onPress } = this.props;

        return (
            <TouchableNativeFeedback onPress={onPress}>
                <View style={styles.listItem}>
                    <Icon name={icon} size={px2dp(22)} color={iconColor}></Icon>
                    <Text style={{ color: 'black', fontSize: px2dp(15), marginLeft: px2dp(20) }}>{text}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ color: 'gray' }}>{subText}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {

    },
    head: {
        flexDirection: 'column',
        height: px2dp(200),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc3d3'
    },
    list: {
        flex: 1,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#e4e4e4'
    },
    listItem: {
        height: px2dp(47),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(25),
        paddingRight: px2dp(25),
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1 / PixelRatio.get()
    },
    logo: {
        width: px2dp(100),
        height: px2dp(100)
    }
});