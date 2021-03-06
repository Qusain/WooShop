
import {  Header, Icon ,Badge} from "react-native-elements";
import { View,StatusBar,Text,TouchableOpacity} from "react-native";
import colors from '../colors.json'
import React, { Component } from "react";
import {connect } from 'react-redux'
import { DrawerActions } from 'react-navigation'

const HeaderC = ({navigation,heading,Cart},props) => {
  console.log(props)
    return (
        <View>
             <StatusBar backgroundColor={colors.background} barStyle={colors.stutsbarContent} />
        <Header

        containerStyle={{
          height:40,
          backgroundColor: 'transparent',
          marginBottom:20,
          justifyContent: 'space-around', borderBottomWidth: 0
        }}
        centerComponent={{ text: heading, style: {fontSize:20, color: colors.color,fontFamily:'Montserrat-Bold' } }}

        leftComponent={<TouchableOpacity onPress={()=>navigation.openDrawer()}><Icon name={'menu'} color={colors.themeC}/></TouchableOpacity>}
          rightComponent={
          <View><Icon  name='shoppingcart'
          type='antdesign'
          onPress={()=> navigation.navigate('Cart')}
          color={colors.themeC}/>
          {Cart.cart.length != 0 ? (<Badge
          status="primary"
          onPress={()=> navigation.navigate('Cart')}
          value={<Text style={{fontSize:10}}>{Cart.cart ? Cart.cart.length : 0}</Text>}
          containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />) : (<View></View>)}
          </View>}
        />
        </View>
    )
}
const mapStateToProps = (state /*, ownProps*/) => {
	return {
        Cart : state.Cart
	}
}
export default connect(
	mapStateToProps  )(HeaderC);

// { icon: 'shopping-cart', color: colors.themeC }
