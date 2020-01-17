import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    console.log('card item result::', props)
    let values = props.values
    let rico = values[0]
    let basico = values[1]
    let pobre = values[2]
    let titulo = `${props.key_material}: ${props.value_material}`
    return (
        <View style={styles.outer_container}>
            <Text style={styles.title}>{titulo}</Text>
            <View style={styles.container}>
                <View>
                    <Text>Rico</Text>
                    <Text>{rico}</Text>
                </View>
                <View>
                    <Text>Básico</Text>
                    <Text>{basico}</Text>
                </View>
                <View>
                    <Text>Pobre</Text>
                    <Text>{pobre}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignContent:'space-around',
        justifyContent:'space-around',
        marginTop:10
    
    },
    outer_container:{
        borderColor:'gray',
        borderRadius:7,
        borderWidth:1,
        margin:7
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        marginStart:5,
        marginTop:2
    }
})