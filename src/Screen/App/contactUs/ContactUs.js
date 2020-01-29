import React from 'react';
import {View, Text, TouchableOpacity,SafeAreaView} from 'react-native';
import HeaderC from '../../../component/header';
import Icon from 'react-native-vector-icons/AntDesign';

export class ContactUs extends React.Component {
    render() {
        return (
            <View style={{
                flex:1,
            }}>
               <View style={{width:'100%',flexDirection:'row',marginTop:25}}>
                   <SafeAreaView/>
                   <View style={{width:'15%',alignItems:'center',justifyContent:'center',marginTop:5}}>
                       <Icon name={'arrowleft'} color={'#ff5300'} size={25} onPress={()=>this.props.navigation.navigate('Home')}/>
                   </View>
                   <View style={{width:'70%',alignItems:'center',justifyContent:'center',}}>
                       <Text style={{fontSize:20,color:'#ff5300',fontWeight:'bold'}}>
                           Contact Us
                       </Text>
                   </View>
                   <View style={{width:'15%',alignItems:'center',justifyContent:'center',}}>
                       <Icon name={'shoppingcart'} color={'#ff5300'} size={25} onPress={()=>this.props.navigation.navigate('Cart')}/>
                   </View>
               </View>

            </View>
        );
    }
}
