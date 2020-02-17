import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import colors from '../../../colors.json';
import HeaderC from '../../../component/header';
import SearchC from '../../../component/Search';
import CarC from '../../../component/ICard';
import TCarC from '../../../component/TCard';
import AsyncStorage from '@react-native-community/async-storage';
import GetCat from './GraphQLComponent/Cat.js'
import GetPop from './GraphQLComponent/Popular.js'
import {connect} from 'react-redux'
import {SliderBox} from "react-native-image-slider-box";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            user: "",
            entries: [1, 2, 1, 1, 1, 1, 1, 1, 1],
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree",
            ],
        };

    }


    updateSearch = (search) => {
        this.setState({search});
    };
    _renderItem = ({item, index}) => {
        const a = index;
        return <TCarC data={item} navigation={this.props.navigation} a={a} width={140} radius={7} Texts={item.name}/>;
    }

    _renderItem1({item, index}) {
        return <CarC data={{item, index}}/>;
    }


    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <View style={style.ViewStyle}>
                <HeaderC navigation={this.props.navigation}/>
                <ScrollView style={{flex: 1}}>
                    <SearchC/>
                    <View style={{width: '100%', height: '35%'}}>
                        <SliderBox style={{height: '100%'}} images={this.state.images} autoplay={true}
                                   circleLoop={true}/></View>
                    <View style={{width: '95%', padding: 10, margin: 10, borderColor: 'rgba(0,0,0,0.58)',}}>
                        <View style={{width: '100%', flexDirection: 'row'}}>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}
                                              onPress={() => this.props.navigation.navigate('Detail')}>
                                <Image style={{width: 60, height: 50, borderRadius: 125,}}
                                       source={require('../../../../assets/products.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>Products</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                <Image style={{width: 50, height: 50, borderRadius: 125,}}
                                       source={require('../../../../assets/sales.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>Sales</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}
                                              onPress={() => this.props.navigation.navigate('Cate')}>
                                <Image style={{width: 50, height: 50, borderRadius: 125,}}
                                       source={require('../../../../assets/categories.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>Categories</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                <Image style={{width: 70, height: 50, borderRadius: 125,}}
                                       source={require('../../../../assets/fashion.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>Fashion & style</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                <Image style={{width: 50, height: 50, borderRadius: 125,}}
                                       source={require('../../../../assets/services.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>Services</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                <Image style={{width: 50, height: 50, borderRadius: 125,}}
                                       source={require('../../../../assets/iot.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>IOT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                                <Image style={{width: 50, height: 50, borderRadius: 125}}
                                       source={require('../../../../assets/supermarket.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>SuperMarket</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}
                                              onPress={() => this.props.navigation.navigate('Cart')}>
                                <Image style={{width: 50, height: 50, borderRadius: 125,}}
                                       source={require('../../../../assets/cart.png')}/>
                                <Text style={{fontSize: 12, color: '#000', marginTop: 5}}>Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <Divider style={{backgroundColor: colors.color, opacity: 0.1, marginTop: 20, marginBottom: 20}}/>
                    <GetPop navigation={this.props.navigation} orderby={0} render={this._renderItem1}/>
                    <Divider style={{backgroundColor: colors.color, opacity: 0.1, marginTop: 20, marginBottom: 20}}/>
                    <GetPop navigation={this.props.navigation} orderby={1} render={this._renderItem1}/>
                    <Divider style={{backgroundColor: colors.color, opacity: 0.1, marginTop: 20, marginBottom: 20}}/>
                    <GetPop navigation={this.props.navigation} orderby={2} render={this._renderItem1}/>
                    <Divider style={{backgroundColor: colors.color, opacity: 0.1, marginTop: 20, marginBottom: 20}}/>
                    <GetPop navigation={this.props.navigation} orderby={3} render={this._renderItem1}/>


                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    ViewStyle: {
        backgroundColor: colors.background,
        flex: 1
    }
});
const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state)
    return {
        state: state
    }
}
export default connect(
    mapStateToProps)(Home);
