import React,{Component} from 'react';
import {Text,View,SafeAreaView} from 'react-native'
import UserReducer from '../reducers/userreducer'
import {adduser} from "../action/useraction";
import {connect} from 'react-redux'

class Display extends Component{

    render() {
        //const {navigation}=this.props;
        //const user=navigation.getParam('user');
        //alert(JSON.stringify(user))
        return (
            <SafeAreaView>
            <View>
                <Text>
                    user:{this.props.user}
                </Text>
            </View>
            </SafeAreaView>
    )
    }
}
const mapStateToProps = state =>{
    const {user} = state.ruser
    return {
        user
    }
}
export default connect (mapStateToProps,{adduser})(Display)

