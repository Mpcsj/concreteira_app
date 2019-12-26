import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import colors from '../styles/colors'

export default props =>{
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.button_color,
        margin:20,
        padding:10,
        borderRadius:7
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})