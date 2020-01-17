import React from 'react'
import { View, FlatList } from 'react-native'
import CardList from './cards/CardItemResult'

function beautifyTitle(title) {
    switch (title) {
        case 'cimento':
            return 'Cimento'
        case 'areia1':
            return 'Areia 1'
        case 'areia2':
            return 'Areia 2'
        case 'brita1':
            return 'Brita 1'
        case 'brita2':
            return 'Brita 2'
        case 'aditivo':
            return 'Aditivo'
    }
}
function generateData(props) {
    console.log(`Funcao generate data`)
    let materiais = props.materiais
    let dados = props.values
    console.log('materiais: ', materiais)
    console.log('dados: ', dados)
    let rows = ['cimento', 'areia1', 'areia2', 'brita1', 'brita2', 'aditivo']
    let data_list = []
    for (let idx = 0; idx < rows.length; idx++) {
        data_list.push({
            key_material: beautifyTitle(rows[idx]),
            value_material: materiais[rows[idx]],
            values: dados[idx]
        })
    }
    console.log('data list:: ', data_list)
    return data_list
}
export default props => {
    let dados_vazios = Object.entries(props.materiais).length === 0 || Object.entries(props.values).length === 0
    console.log('passado via parametro:: ', props)
    var data = null
    if (!dados_vazios) {
        data = generateData(props)
    }
    return (
        <View>
            {
                data === null ?
                    null :
                    <FlatList
                        data={data}
                        keyExtractor={item => {
                            return item.key_material
                        }}
                        renderItem={({ item }) => <CardList {...item} />}
                    />
            }
        </View>
    )
}