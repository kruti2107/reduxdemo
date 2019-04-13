import React,{Component} from 'react';
import {TextInput, View, StyleSheet,ImageBackground,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AppButton} from "../subcomponent/appButton";
import {connect} from 'react-redux'
import {adduser} from "../action/useraction";
import DatePicker from "react-native-datepicker";

export default class Registration extends Component{
    state ={
        user:"",
        userlist:[],
        date:"2016-05-15"
    }

    onLoginPress = () =>{
        console.log(this.state.user);

        this.props.adduser(this.state.user);
        const {navigation}=this.props
        navigation.navigate("Display");
        //debugger
        console.log(this.props.user);
    }

    changeText = (name) =>{
        this.setState({user:name});

    }
    render(){
        console.log(this.props);
        const {container,inputcontainer,inlineImg} = style;
        //debugger
        return (

            <View style={container}>


                    <View style={inputcontainer}>
                        {/*<Image source={require('../images/username.png')} style={inlineImg}/>*/}
                        <TextInput
                            placeholder="Username"
                            onChangeText={this.changeText}/>

                    </View>
                    <View style={inputcontainer}>
                        {/*<Image source={require('../images/username.png')} style={inlineImg}/>*/}
                        <TextInput
                            placeholder="Email"
                            onChangeText={this.changeText}
                        keyboardType={"email-address"}/>

                    </View>
                    <View style={inputcontainer}>
                        {/*<Image source={require('../images/password.png')} style={inlineImg}/>*/}
                        <TextInput  placeholder="Phone Number" keyboardType={"number-pad"}/>
                    </View>
                <View style={{margin:20,borderRadius:20}} >
                    <DatePicker style={{width:270,borderWidth: .5,borderRadius: 0,
                        borderColor: '#000'}} placeholder="select date"
                                date={this.state.date}
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2016-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {this.setState({date: date})}}/>
                </View >
                    <View style={inputcontainer}>
                        {/*<Image source={require('../images/password.png')} style={inlineImg}/>*/}
                        <TextInput  placeholder="Password" secureTextEntry={true}/>
                    </View>
                    <View style={inputcontainer}>
                        {/*<Image source={require('../images/password.png')} style={inlineImg}/>*/}
                        <TextInput  placeholder="Confirm Password" secureTextEntry={true}/>
                    </View>
                    <AppButton title={'Register'} extraStyle={{backgroundColor:'#a2f3f8'}} onPress={this.onLoginPress}/>


            </View>

        );
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        // backgroundImage: url("../images/wallpaper.png")
    },
    inputcontainer:{
        // height:hp('4%'),
        // width:wp('60%'),
        // borderRadius:15,
        // backgroundColor:'#B281F9',
        // margin:10
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: .5,
        borderColor: '#000',
        height: hp('6%'),
        width:wp('75%'),
        borderRadius: 0 ,
        margin: 10
    },
    inlineImg: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
});

const mapStateToProps = state =>{
    const {user} = state.ruser
    return {
        user
    }
}


//export default connect(mapStateToProps,{adduser})(Login);
