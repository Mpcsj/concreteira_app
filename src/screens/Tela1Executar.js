import React, { Component } from 'react'
import colors from '../styles/colors'
import { key_materiais } from '../util/constants'
import { View, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native'
import { Container, Footer, Content } from 'native-base'
import LoadComponent from '../components/Loader'
import connections from '../util/connections'
import CompDropDownMenu from '../components/CompDropDownMenu'

const initialState = {
    cimento: [],
    areia: [],
    brita: [],
    aditivo: [],
    is_loading: true,
    curr_cimento: '',
    curr_areia1: '',
    curr_areia2: '',
    curr_brita1: '',
    curr_brita2: '',
    curr_aditivo: '',
}
class Tela1Executar extends Component {
    static navigationOptions = {
        title: 'Selecione os materiais'
    }
    state = {
        ...initialState
    }
    constructor() {
        super()
        this.load_materiais()
    }
    set_data_from_api(data) {
        this.setState({ is_loading: false })
        this.setState({ cimento: data.cimento })
        this.setState({ areia: data.areia })
        this.setState({ aditivo: data.aditivo })
        this.setState({ brita: data.brita })
    }
    load_materiais = () => {
        fetch(`${connections.url_server}APP/MATERIAL`, {
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

    clean_curr_selected_elements = () => {
        this.setState({
            curr_cimento: '',
            curr_areia1: '',
            curr_areia2: '',
            curr_brita1: '',
            curr_brita2: '',
            curr_aditivo: ''
        })
    }
    nextStage = (navigator) => {
        let materiais = {
            cimento: this.state.curr_cimento,
            areia1: this.state.curr_areia1,
            areia2: this.state.curr_areia2,
            brita1: this.state.curr_brita1,
            brita2: this.state.curr_brita2,
            aditivo: this.state.curr_aditivo
        }
        if (materiais.cimento === '') {
            Alert.alert('Oops', 'Favor selecionar algum tipo de cimento')
        } else if (materiais.areia1 === '') {
            Alert.alert('Oops', 'Favor selecionar pelo menos um tipo de areia')
        } else if (materiais.brita1 === '' || materiais.brita2 === '') {
            Alert.alert('Oops', 'Favor selecionar os tipos de brita')
        } else if (materiais.aditivo === '') {
            Alert.alert('Oops', 'Favor selecionar algum aditivo')
        } else {
            // this.clean_curr_selected_elements()
            console.log('materiais a serem passados: ',materiais)
            navigator.navigate('TelaResultados', { key_materiais: JSON.stringify(materiais) })
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <LoadComponent loading={this.state.is_loading} />
                        <CompDropDownMenu title={'cimento'} data={this.state.cimento} process_callback={(value) => { this.setState({ curr_cimento: value }) }} />
                        <CompDropDownMenu title={'areia1'} data={this.state.areia} process_callback={(value) => { this.setState({ curr_areia1: value }) }} />
                        <CompDropDownMenu title={'areia2'} data={this.state.areia} process_callback={(value) => { this.setState({ curr_areia2: value }) }} />
                        <CompDropDownMenu title={'brita1'} data={this.state.brita} process_callback={(value) => { this.setState({ curr_brita1: value }) }} />
                        <CompDropDownMenu title={'brita2'} data={this.state.brita} process_callback={(value) => { this.setState({ curr_brita2: value }) }} />
                        <CompDropDownMenu title={'aditivo'} data={this.state.aditivo} process_callback={(value) => { this.setState({ curr_aditivo: value }) }} />
                    </View>
                </Content>
                <Footer style={styles.footer}>
                    <TouchableOpacity style={styles.btn_footer} onPress={() => { this.nextStage(this.props.navigation) }}>
                        <Text style={styles.btn_footer}>Executar</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
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
    }
})

export default Tela1Executar