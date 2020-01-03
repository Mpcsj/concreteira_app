import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import App from '../screens/App'
import TelaCadastro from '../screens/Tela1Cadastrar'
import TelaExecutar from '../screens/Tela1Executar'
import TelaResultados from '../screens/TelaResultados'

const routes = {
    App:{
        name:'App',
        screen:App,
        navigationOptions:{
            header:null
        }
    },
    TelaCadastro:{
        name:'Cadastro',
        screen:TelaCadastro
    },
    TelaExecutar:{
        name:'Executar',
        screen:TelaExecutar
    },
    TelaResultados:{
        name:'Resultados',
        screen:TelaResultados
    }
}
const config = {
    initialRouteName:'App'
}
const MenuNavigator = createStackNavigator(routes,config)

export default createAppContainer(MenuNavigator)

