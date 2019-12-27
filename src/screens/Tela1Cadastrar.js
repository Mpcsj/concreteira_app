import React,{Component} from 'react'
import colors from '../styles/colors'
import {TextInput,Text,StyleSheet,TouchableOpacity,View,Dimensions} from 'react-native'
import {Container,Content,Footer} from 'native-base'

class Tela1Cadastrar extends Component{
    static navigationOptions={
        title:'Cadastre um novo material'
    }
    render(){
        return(
            <Container>
                <Content style={styles.container}>
                <TextInput
                  style={styles.text_input}
                onChangeText={(text) => {}}
                    placeholder={'Nome do material'}
                />
                                <TextInput
                  style={styles.text_input}
                onChangeText={(text) => {}}
                    placeholder={'Marca'}
                />
                <TextInput
                  style={styles.text_input}
                onChangeText={(text) => {}}
                    placeholder={'Procedência'}
                />
                <View style={styles.qtd_materiais}>
                <TextInput
                  style={styles.text_input_qtd}
                onChangeText={(text) => {}}
                    placeholder={'Qtd rico'}
                />
                <TextInput
                  style={styles.text_input_qtd}
                onChangeText={(text) => {}}
                    placeholder={'Qtd básico'}
                />
                <TextInput
                  style={styles.text_input_qtd}
                onChangeText={(text) => {}}
                    placeholder={'Qtd pobre'}
                />

                </View>
                </Content>
                <Footer style={styles.footer}>
                    <TouchableOpacity style={styles.btn_footer}>
                        <Text style={styles.btn_footer}>Cadastrar</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
        )
    }
}

const widthScreen = Dimensions.get('window').width
const heuristic = 20
const styles = StyleSheet.create({
    container:{
        padding:5,
        marginTop:20
    },
    footer:{

    },
    btn_footer:{
        alignItems:'center',
        width:'100%',
        height:'100%',
        backgroundColor:colors.button_color,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    text_input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal:10
    
      },
      qtd_materiais:{
          flexDirection:'row',
          justifyContent:'space-evenly'
      },
      text_input_qtd: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal:5,
        width:widthScreen/3 - heuristic
      }
})
export default Tela1Cadastrar