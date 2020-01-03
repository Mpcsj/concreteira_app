import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import Loader from '../components/Loader'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'
export default class TelaResultados extends React.Component {
    static navigationOptions = {
        title: 'Resultado'
    }
    constructor(props) {
        super(props)
        this.state = {
            tableHead: ['','Rico', 'Básico', 'Pobre'],
            tableTitle: ['Cimento', 'Areia 1', 'Areia 2', 'Brita 1', 'Brita 2', 'Aditivo'],
            tableData: [],
            isLoading: false
        }
    }

    render() {
        return (
            <View style={styles.outer_container}>
                <Loader loading={this.state.isLoading} />
                <View style={styles.tableStyle}>
                <Table borderStyle={{ borderWidth: 1 }}>
                    <Row data={this.state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={this.state.tableTitle} style={styles.title} heightArr={[cellHeight, cellHeight,cellHeight,cellHeight,cellHeight,cellHeight]} textStyle={styles.text} />
                        <Rows data={this.state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
                </View>
            </View>
        )
    }
}

const cellHeight = 30
const styles = StyleSheet.create({
    outer_container:{
        padding:5
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 30  },
    text: { textAlign: 'center' },
    tableStyle:{marginTop:30}
  });