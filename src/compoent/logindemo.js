import React,{Component} from 'react';
import {TextInput, View, StyleSheet,ImageBackground,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AppButton} from "../subcomponent/appButton";
import {connect} from 'react-redux'
import {adduser} from "../action/useraction";
import {setuser} from "../action/setuser";

class LoginDemo extends Component{
    state ={
        user:"",
        userlist:[]
    }

    onLoginPress = () =>{
        debugger;
        console.log(this.state.user);

        this.props.adduser(this.state.user);
        const {navigation}=this.props
        navigation.navigate("Display");
        //debugger
        console.log(this.props.user);
    }
    componentWillMount() {
        debugger;
        console.log("component will mount called!")
    }
    componentDidMount() {
        debugger;
        console.log("component did mount called!")
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
        debugger;
        console.log("Component will receive props called!")
    }
    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        console.log("should update component called!")
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        debugger;
        console.log("component will update called!")
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;
        console.log("component did updated called!")
    }

    changeText = (name) =>{
        this.setState({user:name});

    }

    onSignUp = () =>{
        const {navigation}=this.props;
        navigation.navigate('Register');
    }

    onFlatList = () =>{
        this.props.setuser();
        const {navigation}=this.props;
        navigation.navigate('FlatListDemo');
    }
    render(){
        debugger;
        console.log("render called");
        const {container,inputcontainer,inlineImg} = style;
        //debugger
        return (

            <View style={container}>
                {/*<ImageBackground source={require('../images/wallpaper.png')}*/}
                                 {/*style={{width:wp('100%'),height: hp('100%'),alignItems: 'center',justifyContent: 'center'}}>*/}

                    <View style={inputcontainer}>
                        {/*<Image source={require('../images/username.png')} style={inlineImg}/>*/}
                        <TextInput
                           placeholder="Username"
                           onChangeText={this.changeText}/>

                    </View>
                    <View style={inputcontainer}>
                        {/*<Image source={require('../images/password.png')} style={inlineImg}/>*/}
                        <TextInput  placeholder="Password" secureTextEntry={true}/>
                    </View>
                <AppButton title={'Login'} extraStyle={{backgroundColor:'#e2e8f8'}} onPress={this.onLoginPress}/>
                    <View style={{flexDirection: 'row',margin:10,justifyContent:'space-around'}}>
                             <AppButton title={'Forgot Password?'}/>
                             <AppButton title={'Create Account?'} onPress={this.onSignUp}/>
                    </View>
                    <AppButton title={'FlatListDemo'} onPress={this.onFlatList}/>
                {/*</ImageBackground>*/}
            </View>

        );
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'#2F3E7E',
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
        backgroundColor: '#f1f9f6',
        borderWidth: .5,
        borderColor: '#000',
        height: hp('6%'),
        width:wp('75%'),
        borderRadius: 20 ,
        margin: 15
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


export default connect(mapStateToProps,{adduser,setuser})(LoginDemo);
