import React,{Component} from 'react';
import {Text,View,Style,SafeAreaView,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  CheckBox  from 'react-native-check-box';
import {AppButton} from "../subcomponent/appButton";
import {DrawerActions} from "react-navigation"
export default class Login extends Component{

    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    };
    render() {
        const {topcontainer,
            middlecontainer,
            thirdcontainer,
            bottomcontainer,
            txtstyle,
            inputcontainer,
            inlineImg}=styles;
        return (
            <SafeAreaView style={topcontainer}>

            <View style={topcontainer}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Image source={require('../images/logo_luzy.png')}
                        style={{height: hp('5%'), width: wp('27%'), margin: 10}} />
                        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                                <Image source={require('../images/menu_icon.png')}
                                       style={{height: hp('5%'), width: wp('9%'), margin: 10}}/>
                        </TouchableOpacity>
                </View>
            </View>
                <View style={middlecontainer}>
                    <View style={{alignItems:'center'}}>
                    <Text style={[txtstyle,{fontSize:hp('5%')}]}>SIGN IN</Text>
                    <Text style={txtstyle}>with LUZY account</Text>
                    </View>
                    <View style={{margin:10}}>
                        <Text style={[txtstyle,{margin:4}]}>USERNAME:</Text>
                        <View style={inputcontainer}>
                            <Image source={require('../images/placeholeder_email_icon.png')} style={inlineImg}/>
                            <TextInput placeholder="Your Email Address" style={{color:'#00386D'}}/>
                        </View>
                        <Text style={[txtstyle,{margin:4}]}>PASSWORD:</Text>
                        <View style={inputcontainer}>
                            <Image source={require('../images/placeholeder_password_icon.png')} style={inlineImg}/>
                            <TextInput placeholder="Your Password" style={{color:'#00386D'}} secureTextEntry={true}/>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <CheckBox checkBoxColor='#fff'
                                      isChecked={false}
                                      rightTextView={<Text style={{color: '#fff'}}>Remember me</Text>}/>
                            <TouchableOpacity>
                                <Text style={[txtstyle,{margin:4}]}>Forgot Your Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{margin:4}}>
                        <AppButton  title={'LOGIN'}
                                    extraStyle={{backgroundColor:'#00ABDE'}}/>
                        </View>
                    </View>
                </View>
             <View style={thirdcontainer}>
                 <View style={{alignItems:'center'}}>
                     <Text style={[txtstyle,{fontSize:hp('3%')}]}>SIGN IN</Text>
                     <Text style={txtstyle}>with your social media account</Text>
                 </View>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                     <Image source={require('../images/facebook_icon.png')}
                            style={{height: hp('5.5%'), width: wp('11.1%'),margin:4}} />
                     <Image source={require('../images/twitter_icon.png')}
                            style={{height: hp('5.5%'), width: wp('11.1%'),margin:4}} />
                     <Image source={require('../images/instagram_icon.png')}
                            style={{height: hp('5.5%'), width: wp('11.1%'),margin:4}} />
                 </View>
             </View>
                <View style={bottomcontainer}>
                    <View style={{alignItems:'center',margin:4}}>
                        <Text style={[txtstyle,{fontSize:hp('3%'),color:'#004B90'}]}>SIGN UP</Text>
                        <AppButton  title={'CREATE ACCOUNT'}
                                    extraStyle={{backgroundColor:'#004B90',margin:4,color:'#fff'}}/>
                    </View>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity style={{flexDirection:'row'}}>
                                <Image source={require('../images/about_us_icon.png')}
                               style={{height: hp('3%'), width: wp('7%'),margin:4}} />
                               <Text style={{margin:5}}>about us</Text>
                                </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                            <Image source={require('../images/need_help_icon.png')}
                                   style={{height: hp('3%'), width: wp('7%'),margin:4}} />
                            <Text style={{margin:5}}>need help?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </SafeAreaView>

        )
    }
}

const styles=StyleSheet.create({
    topcontainer:{
        flex:1,
        backgroundColor:'#004B90',
    },

    middlecontainer:{
      flex:5.2,
      backgroundColor: '#001629',

    },
    thirdcontainer:{
        flex:2,
        backgroundColor: '#004B90',
        margin:10
    },
    bottomcontainer:{
        flex:3,
        backgroundColor:'#fff'
    },
    txtstyle:{
        color:'#fff',
    },
    inputcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#002B57',
        borderWidth: .5,
        borderColor: '#000',
        height: hp('6%'),
        width:wp('93%'),
        borderRadius: 10 ,
        margin:4

    },
    inlineImg: {
        padding: 10,
        margin: 5,
        height: hp('1%'),
        width: wp('1%'),
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    checkbox:{
        color:'#000'
    }
});
