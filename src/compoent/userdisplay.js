import React,{Component} from 'react';
import {Text,View,SafeAreaView} from 'react-native';

export default class UserDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            data:props.navigation.state.params.user
        }
    }


    render(){
        return (
            <SafeAreaView style={{textAlign: 'center',justifyContent:'center'}}>
            <View >
                <Text>{this.state.data.name}</Text>
                <Text>{this.state.data.username}</Text>
            </View>
            </SafeAreaView>
        )
    }
}
