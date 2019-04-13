import React,{Component} from 'react';
import {Text, View, TextInput, FlatList, SafeAreaView, TouchableOpacity, Alert, StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux'
import {setUser} from "../action/setuser";
import {heightPercentageToDP as hp,widthPercentageToDP as  wp} from "react-native-responsive-screen";
import {DrawerActions} from "react-navigation";

 class FlatListDemo extends Component{
 state = {
     userList: [],
     loading: false
 }
     static navigationOptions={
         drawerLabel:'FlatList'
     }
 componentDidMount(){
     debugger;
     //this.props.setUser();
 }

     toggleDrawer = () => {
         //Props to open/close the drawer
         this.props.navigation.dispatch(DrawerActions.toggleDrawer());
     };
     onCilckItem=(item)=>{
         const {navigation}=this.props
         navigation.navigate("UserDisplay",{user:item});

        }

        onRenderItem =({item})=>
            <TouchableOpacity onPress={this.onCilckItem.bind(this,item)}
                              style={{borderRadius:20,borderWidth:1,padding:10,borderColor:'#000',margin:7}}>
                <Text>{item.name}</Text>
                <Text> {item.username}</Text>
            </TouchableOpacity>


 itemSeperator = () =>{
     return (
         <View style={{height:1,width:'100%'}} />
     )
 }
    render(){
     debugger;
     //console.log(this.state.userList);
        return (
            <SafeAreaView style={styles.topcontainer}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',backgroundColor:'#827290',}}>
                    <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                        <Image source={require('../images/menu_icon.png')}
                               style={{height: hp('4%'), width: wp('9%'), margin: 10}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:10}}>
                        <FlatList data={this.props.userList}
                                renderItem={this.onRenderItem}
                                 keyExtractor={(item,index)=>index}
                                 ItemSeparatorComponent={this.itemSeperator}
                                ListEmptyComponent={this.renderEmpty} />
                </View>
        </SafeAreaView>

        )
    }
}
const styles=StyleSheet.create({
    topcontainer:{
        flex:1,

    }
})
const mapStateToProps = state =>{
     debugger;
    const {userList} = state.setuser
    return {
        userList
    }
}

export default connect(mapStateToProps,{setUser})(FlatListDemo)