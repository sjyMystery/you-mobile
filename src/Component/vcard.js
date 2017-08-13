import React from 'react'
import {Grid , Row , Avatar , Card , ListItem , Icon , Col} from 'react-native-elements';
import {Text} from 'react-native'
export default class VCard extends React.Component
{
	render()
	{
		return (<Grid>
			<Row style={{height : 30}}></Row>
			<Row style={{height : 50 , flexDirection : 'row' , justifyContent : 'space-between'}}>
				<Col style={{height : 50 , flexDirection : 'row'}}>
					<Icon
						style={{marginLeft : 20}}
						name='qrcode'
						type='font-awesome'
						color='#000000'
						iconStyle={{}}
						size={40}
						onPress={() => console.log('hello')}/>
				</Col>
				<Col style={{height : 50 , flexDirection : 'row'}}>
					<Icon
						rounded
						style={{marginRight : 20}}
						name='flag'
						type='font-awesome'
						color='#000000'
						iconStyle={{}}
						size={30}
						onPress={() => console.log('hello')}/>
				</Col>
			</Row>
			<Row style={{
				height : 50 ,
				justifyContent : 'center' ,
				flexDirection : 'column' ,
				alignItems : 'center'
            }}><Text style={{fontSize: 13}}>No.{this.props.id}</Text></Row>
			<Row style={{height : 150 , justifyContent : 'center' , flexDirection : 'column' , alignItems : 'center'}}>
				<Avatar
					rounded
					xlarge
					source={require("../../assets/img/app_icon.png")}
					overlayContainerStyle={{backgroundColor : '#fafafa'}}
					onPress={() => console.log("点了头像")}
					activeOpacity={0.7}
					containerStyle={{flex : 4 , marginTop : 0}}
				/>
			</Row>
			<Row style={{
				height : 100 ,
				justifyContent : 'flex-start' ,
				flexDirection : 'column' ,
				alignItems : 'center'
            }}><Text style={{padding: 10, fontSize: 33}}>{this.props.name}</Text></Row>
			<Row style={{height : 50 , justifyContent : 'center' , flexDirection : 'row' , alignItems : 'center'}}>
				<Icon
					name='phone'
					type='font-awesome'
					color='#000000'
					onPress={() => console.log('hello')}/>
				<Text style={{fontSize : 20}}>
					&nbsp;&nbsp;+86&nbsp;&nbsp;
				</Text>
				<Text style={{fontSize : 20}}>
                    {this.props.mobile}
				</Text>
			</Row>
			<Row style={{
				height : 100 ,
				justifyContent : 'flex-start' ,
				flexDirection : 'column' ,
				alignItems : 'center'
			}}>
				<Text style={{marginTop : 30 , marginLeft : 33 , marginRight : 33}}>
                    {this.props.motto}
				</Text>
			</Row>
			<Row style={{height : 100}}></Row>
		</Grid>)
	}
}