//This file gives an example for creating a page
import {Page,Header} from '../Component'
import React from 'react'
import {bindActionCreators} from 'redux'
import {Button,Input,Item} from 'native-base'
import {Text,View,Picker} from 'react-native'
import * as act from '../Actions'
import * as style from '../style'
myPage = class ProfileEdit extends React.Component {

    input :Ojbect

    constructor(props)
    {
        super(props)
        this.state={value:props.value}
    }

    onChanged =()=>{
        this.props.pop()
    }
    onChangeFailed = () =>{

    }
    onNoChange =()=>{
        this.props.pop()
    }
    onPressRight = () => {
        if(this.state.value!=this.props.value)
        this.props.submit(this.props.item,this.state.value)
            .then(this.onChanged,this.props.onChangeFailed)
        else
        {
            this.onNoChange()
        }
    }



    render() {
        console.log(this.props)
        let right =<Text style={{color:style.page.header_ft_color}}>完成</Text>
        var input
        switch(this.props.type)
        {
            case 'gender':{
                console.log('default value:',this.props.value)
                input =
                <Picker
                    selectedValue={this.props.value||0}
                    onValueChange={(gender) => {this.setState({value: gender})}}
                    style={{backgroundColor:style.page.ftcolor,marginTop:(style.device.height-style.page.header_height)/2}}>
                    <Picker.Item label="男" value={1} />
                    <Picker.Item label="女" value={0} />
                </Picker>
                break
            }
            case 'phone':{

                input=

                    <Item regular style={{backgroundColor:style.page.ftcolor}}>
                    <Input  value={this.state.value}
                            reference={(ref)=>this.input=ref}
                            onChangeText={(text)=>this.setState({value:text})}
                            onSubmitEditing={this.onPressRight}
                            returnKeyType='done'
                            keyboardType='phone-pad'/>
                    </Item>
                break

            }
            default:{

                input =

                    <Item regular style={{backgroundColor:style.page.ftcolor}}>
                    <Input  value={this.state.value}
                            reference={(ref)=>this.input=ref}
                            onChangeText={(text)=>this.setState({value:text})}
                            onSubmitEditing={this.onPressRight}
                            returnKeyType='done'/>
                    </Item>
                break
            }
        }
        return <View>

            <Header.Nav right={right}
                        title={this.props.item_name}
                        pop={this.props.pop}
                        onPressRight={this.onPressRight}/>

            <View style={{height:20}}/>

            {input}
        </View>
    }

};
selectProps = (state) => {
    return {}
};
selectActions = (dispatch) => {
    return bindActionCreators({
        submit:act.profile.editProfile,
        pop:act.pop
    }, dispatch)
};

export default Page.Pure(selectProps, selectActions, myPage)