import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
function reescreveLista(lista){
    let res = []
    lista.forEach(element => {
        res.push({value:element})
    });
    return res
}
export default props =>{
    return(
        <View style={styles.container}>
            <Dropdown
                label={props.title}
                data = {reescreveLista(props.data)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    }
})