import React,{Component} from 'react'
import {View,
        SafeAreaView,
        Image,
        StyleSheet,
        Text,
        ScrollView,
        Dimensions,
        Animated} from 'react-native'
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from "react-native-responsive-screen";
const Device_Width=Dimensions.get('window').width;
const Device_Height=Dimensions.get('window').height


export default class SliderDemo extends Component {
    scrollX = new Animated.Value(0)
    constructor(props) {
        super(props);

           this.uri = [
               require('/Users/mac_mojave_new/Desktop/Reactdemo/reduxdemo/src/images/img1.png'),
               require('/Users/mac_mojave_new/Desktop/Reactdemo/reduxdemo/src/images/react.png'),
               require('/Users/mac_mojave_new/Desktop/Reactdemo/reduxdemo/src/images/reactlogo.png'),
               // require('/Users/mac_mojave_new/Desktop/Reactdemo/reduxdemo/src/images/react.png'),
               // require('/Users/mac_mojave_new/Desktop/Reactdemo/reduxdemo/src/images/reactlogo.png')
           ]

    }


    render(){
        let position = Animated.divide(this.scrollX, Device_Width);

        return(
            <SafeAreaView >
                <View style={{width:Device_Width,height:Device_Width}}>
                <ScrollView horizontal
                            //contentContainerStyle={{width:Device_Width}}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event([{
                                nativeEvent:{contentOffset: {x:this.scrollX}}
                            }])}
                            scrollEventThrottle={1}
                            >

                    {this.uri.map((item,key)=>(
                        <View >
                        <View >
                            <Image  key={key} source={item} style={{width:Device_Width,height:Device_Width}} />
                        </View>

                        </View>
                    ))
                    }

                </ScrollView>
                <View style={{flexDirection:'row',justifyContent:'center'}} >
                {
                    this.uri.map((item,key)=>{
                        let opacity=position.interpolate({
                            inputRange:[key-1,key,key+1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={item}
                                style={{opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        );
                    })
                }
                </View>
                </View>
            </SafeAreaView>
        )
    }


}


