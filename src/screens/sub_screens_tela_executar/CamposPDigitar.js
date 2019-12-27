import React from 'react'
import {View,Text} from 'react-native'

const desenhaCampos=()=>{
    return(
        <View>
            <Text>Teste</Text>
        </View>
    )
}
export default props=>{
    let show = props.show || false
    if(show){
        return(
            {desenhaCampos()}
        )
    }else{
        return None
    }
}