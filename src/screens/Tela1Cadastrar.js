import React, { Component } from 'react'
import colors from '../styles/colors'
import connections from '../util/connections'
import { TextInput, Text, StyleSheet, TouchableOpacity, View, Dimensions, Alert } from 'react-native'
import { Container, Content, Footer } from 'native-base'
import CompDropDownMenu from '../components/CompDropDownMenu'
import Loader from '../components/Loader'
const initialState = {
    tipos_materiais: [],
    descricoes: [],
    is_loading: true,
    curr_nome: '',
    curr_marca: '',
    curr_procedencia: '',
    curr_qtd_rico: '',
    curr_qtd_basico: '',
    curr_qtd_pobre: '',
    curr_idx_tipo:-1
}
class Tela1Cadastrar extends Component {
    static navigationOptions = {
        title: 'Cadastre um novo material'
    }
    state = {
        ...initialState
    }
    constructor() {
        super()
        this.get_all_tipos_materiais()
    }
    get_all_tipos_materiais = () => {
        fetch(`${connections.url_server}APP/MATERIAL/tipos`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log('dados: ',responseJson)
                this.set_data_from_api(responseJson)
            })
            .catch((error) => {
                Alert.alert('Oops', 'Erro ao obter dados da API: ' + error)
                this.setState({ is_loading: false })
            });
    }

    set_data_from_api = (data) => {
        console.log('data: ', data)
        let res = []
        let res2 = []
        Object.keys(data).forEach(element => {
            res.push(element)
            res2.push(data[element])
        })
        this.setState({ tipos_materiais: res, is_loading: false, descricoes: res2 })
        console.log('tipos de materiais: ', this.state.tipos_materiais)
    }
    verify_constraints = ()=>{
        return true
    }
    get_curr_tipo=()=>{
        let res = this.state.tipos_materiais[this.state.curr_idx_tipo]
        console.log('tipo do material atual: ',res)
        return res
    }

    next_stage = () => {
        if (this.verify_constraints()) {
            this.setState({is_loading:true})
            fetch(`${connections.url_server}APP/MATERIAL`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome:this.state.curr_nome,
                    marca:this.state.curr_marca,
                    procedencia:this.state.curr_procedencia,
                    qtd_rico:this.state.curr_qtd_rico,
                    qtd_basico:this.state.curr_qtd_basico,
                    qtd_pobre:this.state.curr_qtd_pobre,
                    tipo:this.get_curr_tipo()
                }),
            }).then(res=>{
                this.setState({is_loading:false})
                Alert.alert('Ok','Material cadastrado com sucesso!')
                this.setState({...initialState,is_loading:false})
            }).catch(err=>{
                this.setState({is_loading:false})
                Alert.alert('Oops','Falha ao cadastrar material')
            });
        }
    }

    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Loader loading={this.state.is_loading} />
                    <TextInput
                        style={styles.text_input}
                        onChangeText={(text) => { this.setState({ curr_nome: text }) }}
                        placeholder={'Nome do material'}
                        value={this.state.curr_nome}
                    />
                    <TextInput
                        style={styles.text_input}
                        onChangeText={(text) => { { this.setState({ curr_marca: text }) } }}
                        placeholder={'Marca'}
                        value={this.state.curr_marca}
                    />
                    <TextInput
                        style={styles.text_input}
                        onChangeText={(text) => { { this.setState({ curr_procedencia: text }) } }}
                        placeholder={'Procedência'}
                        value={this.state.curr_procedencia}
                    />
                    <CompDropDownMenu title={'tipo do material'} data={this.state.descricoes} 
                    process_callback={(value,idx)=>{this.setState({curr_idx_tipo:idx})}}/>
                    <View style={styles.qtd_materiais}>
                        <TextInput
                            style={styles.text_input_qtd}
                            onChangeText={(text) => { { this.setState({ curr_qtd_rico: text }) } }}
                            placeholder={'Qtd rico'}
                            keyboardType={'numeric'}
                            value={this.state.curr_qtd_rico}
                            
                        />
                        <TextInput
                            style={styles.text_input_qtd}
                            onChangeText={(text) => { { this.setState({ curr_qtd_basico: text }) } }}
                            placeholder={'Qtd básico'}
                            keyboardType={'numeric'}
                            value={this.state.curr_qtd_basico}
                        />
                        <TextInput
                            style={styles.text_input_qtd}
                            onChangeText={(text) => { { this.setState({ curr_qtd_pobre: text }) } }}
                            placeholder={'Qtd pobre'}
                            keyboardType={'numeric'}
                            value={this.state.curr_qtd_pobre}
                        />

                    </View>
                </Content>
                <Footer style={styles.footer}>
                    <TouchableOpacity style={styles.btn_footer} onPress={()=>{this.next_stage()}} >
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
    container: {
        padding: 5,
        marginTop: 20
    },
    footer: {

    },
    btn_footer: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: colors.button_color,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    text_input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10

    },
    qtd_materiais: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text_input_qtd: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        width: widthScreen / 3 - heuristic
    }
})
export default Tela1Cadastrar