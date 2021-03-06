import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import colors from '../../../colors.json';
import GButton from '../../../component/GButton';
import ButtonC from '../../../component/Button';
import { gql } from "apollo-boost";
import { Mutation } from 'react-apollo';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'

const Loginn = gql`
mutation LoginUser($username: String!, $password: String!) {
    login( input: {
      clientMutationId:"uniqueId"
      username: $username
      password: $password
    } ) {
      authToken
      user {
		id
		userId
        name
        avatar{
          url
        }
        email
        lastName
        firstName
      }
    }
  }
`;
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailcolor: colors.background,
			passwordcolor: colors.background,
			checked: false,
			username:"",
			password:"",
			ll:false
		};
	}
	componentDidMount(){

	}
	LoginNow(login){
		this.setState({ll:true})
        login({
          variables: {
           username : this.state.username,
           password : this.state.password
          }
        })
		  .then(res => {
			  console.log(res)
			this.setState({ll:false})
	  AsyncStorage.setItem('userToken',JSON.stringify(res.data.login))
	  this.props.dispatch({type:'LOGINUSER',user:res.data.login})
      this.props.navigation.navigate('App');

		})
		  .catch(err => {
			Toast.show(err.graphQLErrors[0].message);

			console.warn(err.graphQLErrors[0].message)
			this.setState({ll:false})
		});

}
sendUserName=(login)=>{
		const name={
			name:this.state.username,
		};
		AsyncStorage.setItem('Key',JSON.stringify(name));
	this.LoginNow(login);
}

	render() {

		return (
			<View style={style.ViewStyle}>
				<StatusBar backgroundColor={colors.background} barStyle={colors.stutsbarContent} />

				<Text style={style.TextStyle}>WELCOME ,</Text>
				<Text style={style.subTextStyle}>sign in to continue</Text>

				<Mutation mutation={Loginn} >
            {(login, { data }) => (
				<View style={style.inputContainer}>
					<Input
						inputStyle={style.inputStyle}
						placeholder="Email"
						rightIcon={{
							type: 'font-awesome',
							name: 'check',
							color: this.state.emailcolor,
							size: 15
						}}
						onChangeText={(e)=> this.setState({username:e})}
						placeholderTextColor={colors.color}
					/>
					<Input
						inputStyle={style.inputStyle}
						placeholder="Password"
						secureTextEntry={true}
						rightIcon={{
							type: 'font-awesome',
							name: 'check',
							color: this.state.passwordcolor,
							size: 15
						}}
						onChangeText={(e)=> this.setState({password:e})}
						placeholderTextColor={colors.color}
					/>

					<GButton loading={this.state.ll} Text={'LOGIN'} onPress={() => this.sendUserName(login)} />
					</View>
					)}

					</Mutation>

				<ButtonC Text={'REGISTER ?'} onPress={() => this.props.navigation.navigate('Register')} />
			</View>
		);
	}
}
const style = StyleSheet.create({
	ViewStyle: {
		backgroundColor: colors.background,
		flex: 1,
		padding: 30
	},
	TextStyle: {
		color: colors.color,
		marginTop: 20,
		fontSize: 30,
		fontFamily: 'Montserrat-Bold'
	},
	subTextStyle: {
		color: colors.color,
		top: -8,
		fontSize: 20,
		fontFamily: 'Montserrat-Light'
	},
	inputStyle: {
		fontSize: 15,
		color: colors.color,
		fontFamily: 'Montserrat-Light'
	},
	inputContainer: {
		paddingTop: 40,
		flex: 1
	}
});
const mapStateToProps = (state /*, ownProps*/) => {
	console.log(state)
	return {
	}
  }

export default connect(
	mapStateToProps  )(Login);
