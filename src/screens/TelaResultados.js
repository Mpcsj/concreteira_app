import React from 'react'
import { View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from '../styles/colors'
import MButtom from '../components/ButtonNextScreen'
import { key_materiais } from '../util/constants'
import connections from '../util/connections'
import Loader from '../components/Loader'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'
export default class TelaResultados extends React.Component {
    static navigationOptions = {
        title: 'Resultado'
    }
    constructor(props) {
        super(props)
        this.state = {
            tableHead: ['', 'Rico', 'Básico', 'Pobre'],
            tableTitle: ['Cimento', 'Areia 1', 'Areia 2', 'Brita 1', 'Brita 2', 'Aditivo'],
            tableData: [],
            isLoading: true
        }
        let materiais = props.navigation.getParam(key_materiais)
        console.log('materiais passados: ', materiais)
        this.callApiAndGetResult(materiais)
    }

    callApiAndGetResult = (materiais) => {
        fetch(`${connections.url_server}APP/MATERIAL/result`, {
            method: 'Post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(materiais)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log('dados: ',responseJson)
                this.setState({ isLoading: false })
            })
            .catch((error) => {
                Alert.alert('Oops', 'Erro ao obter dados da API,favor tente novamente')
                console.log('Error via api: ', error)
                this.setState({ isLoading: false })
            });
    }

    render() {
        return (
            <View style={styles.outer_container}>
                <Loader loading={this.state.isLoading} />
                <View style={styles.tableStyle}>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <Row data={this.state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={this.state.tableTitle} style={styles.title} heightArr={[cellHeight, cellHeight, cellHeight, cellHeight, cellHeight, cellHeight]} textStyle={styles.text} />
                            <Rows data={this.state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                    <View style={styles.layout_botoes}>
                        <MButtom text='Enviar por email' click={()=>{}}/>
                        <MButtom text='Gerar PDF' click={()=>{}}/>
                    </View>
                </View>
            </View>

        )
    }
}

const cellHeight = 32
const styles = StyleSheet.create({
    outer_container: { padding: 5 },
    container: { flex: 1, padding: 30, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: cellHeight },
    text: { textAlign: 'center' },
    tableStyle: { marginTop: 30 },
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
    footer: {
        flexDirection: 'column',
        marginBottom: 27
    },
    layout_botoes:{
        marginTop:30
    }
});