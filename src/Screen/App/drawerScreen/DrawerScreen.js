import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../../colors";
import Icon from 'react-native-vector-icons/AntDesign';


export class DrawerScreen extends React.Component {
    state = {
        usernamee: " ",
        email: '',
    }
    componentDidMount = () => {
        AsyncStorage.getItem('Key', (error, res) => {
            if (res !== null) {
                const data = JSON.parse(res)
                this.setState({usernamee: data.name, email: data.mail})
            }
        })
    }
    logout=()=>{
        this.props.dispatch({type:'LOGINUSER',user:res.data.login})
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View
                    style={{
                        width: '100%',
                        backgroundColor: '#ff5300',
                        height: '22%',
                        alignItems: 'center',
                    }}>
                    <View style={{width: '100%', alignItems: 'flex-end', marginTop: 8, marginRight: 5}}>
                        <Icon name={'menu-unfold'} color={'#fff'} size={20}
                              onPress={() => this.props.navigation.closeDrawer()}/>
                    </View>
                    <View style={{
                        width: '100%',
                        height: '20%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginTop: 10,
                        marginLeft: 10,
                    }}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold',}}>
                            Welcome
                        </Text>
                    </View>
                    <View style={{
                        width: '100%',
                        height: '20%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', marginLeft: 5}}>
                            {this.state.usernamee}
                        </Text>
                    </View>

                    <View style={{
                        width: '100%',
                        height: '20%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold', marginLeft: 5}}>
                            {this.state.email}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{width: '100%', marginTop: 25, flexDirection: 'row'}}
                                  onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'home'} color={'#ff5300'} size={20}/>
                    </View>
                    <View style={{width: '80%', alignItems: 'flex-start',}}>
                        <Text style={{fontSize: 15, color: '#ff5300', fontWeight: 'bold', marginLeft: 8}}>
                            Home
                        </Text></View></TouchableOpacity>

                <TouchableOpacity style={{width: '100%', marginTop: 25, flexDirection: 'row'}}
                                  onPress={() => this.props.navigation.navigate('Cate')}>
                    <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'home'} color={'#ff5300'} size={20}/>
                    </View>
                    <View style={{width: '80%', alignItems: 'flex-start',}}>
                        <Text style={{fontSize: 15, color: '#ff5300', fontWeight: 'bold', marginLeft: 8}}>
                            Catagories
                        </Text></View></TouchableOpacity>

                <TouchableOpacity style={{width: '100%', marginTop: 25, flexDirection: 'row'}}
                                  onPress={() => this.props.navigation.navigate('Detail')}>
                    <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'home'} color={'#ff5300'} size={20}/>
                    </View>
                    <View style={{width: '80%', alignItems: 'flex-start',}}>
                        <Text style={{fontSize: 15, color: '#ff5300', fontWeight: 'bold', marginLeft: 8}}>
                            Products
                        </Text></View></TouchableOpacity>

                <TouchableOpacity style={{width: '100%', marginTop: 25, flexDirection: 'row'}}
                                  onPress={() => this.props.navigation.navigate('Cart')}>
                    <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'shoppingcart'} color={'#ff5300'} size={20}/>
                    </View>
                    <View style={{width: '80%', alignItems: 'flex-start',}}>
                        <Text style={{fontSize: 15, color: '#ff5300', fontWeight: 'bold', marginLeft: 8}}>
                            Cart
                        </Text></View></TouchableOpacity>

                <TouchableOpacity style={{width: '100%', marginTop: 25, flexDirection: 'row'}}
                                  onPress={() => this.props.navigation.navigate('ContactUs')}>
                    <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'contacts'} color={'#ff5300'} size={20}/>
                    </View>
                    <View style={{width: '80%', alignItems: 'flex-start',}}>
                        <Text style={{fontSize: 15, color: '#ff5300', fontWeight: 'bold', marginLeft: 8}}>
                            Contact us
                        </Text></View></TouchableOpacity>


                <View style={{width:'100%',borderBottomWidth:1,borderColor:'#ff5300',marginTop:15}}></View>

                <TouchableOpacity style={{width: '100%', marginTop: 25, flexDirection: 'row'}}
                                  onPress={() => this.props.navigation.navigate('Checkout')}>
                    <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'contacts'} color={'#ff5300'} size={20}/>
                    </View>
                    <View style={{width: '80%', alignItems: 'flex-start',}}>
                        <Text style={{fontSize: 15, color: '#ff5300', fontWeight: 'bold', marginLeft: 8}}>
                            My Address
                        </Text></View></TouchableOpacity>
                <TouchableOpacity
                    style={{width: '100%', marginTop: 25, flexDirection: 'row'}}
                    onPress={() =>this.logout() }>
                    <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'logout'} color={'#ff5300'} size={20}/>
                    </View>
                    <View style={{width: '80%', alignItems: 'flex-start',}}>
                        <Text style={{fontSize: 15, color: '#ff5300', fontWeight: 'bold', marginLeft: 8}}>
                            Logout
                        </Text></View></TouchableOpacity>

            </View>
        );
    }
}
