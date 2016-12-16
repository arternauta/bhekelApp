'use strict'

import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Svg, {Circle} from 'react-native-svg'

const detalleElemento = require ('/bhekelApp/components/detalleElementoView')
const styles = require ('../styles')
const REQUEST_URL = 'http://ranking.bhekel.com/bhekelApp/oficinas.json'
const moment = require('moment')

require('moment/locale/pt')
moment.locale('es')

var dia = moment().format("DD");
var mes = moment().format("MMMM")

var primerDia = moment("20161020", "YYYYMMDD")




class dashboardView extends Component{
constructor(props){
  super(props)
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    }),
    loaded:false
  }
}

componentDidMount(){
  this.fetchData()
}

fetchData(){
  fetch(REQUEST_URL)
  .then((response)=>response.json())
  .then((responseData)=>{
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData),
      loaded:true
    })
  })
}

onElementoPressed(elemento){

  this.props.navigator.push({
    name: 'Detalles',
    passProps: {elemento: elemento}
  })

}
//
renderElemento(elemento){
  var urlImage = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/SantaCruzRank.png'
    urlImage += '?random_number='+new Date().getTime()
  return(
    <TouchableOpacity onPress={()=>this.onElementoPressed(elemento)}>
        <Image key={elemento.foto} source={{uri:urlImage}} style={styles.elemento}>
          <View style={styles.elementoContainer}>
            <Text style={styles.pais}>{elemento.Pais}</Text>
            <Text style={styles.nombresPuesto}>{elemento.Nombre}</Text>
            <Text style={styles.puesto}>{elemento.Puesto}</Text>
          </View>
        </Image>
    </TouchableOpacity>

    )
}
render(){
  var urlHeader = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/header.jpg'
    urlHeader += '?random_number='+new Date().getTime()

    return(
      <View style={styles.container}>
          <Image
          source={{uri:urlHeader}}
          style={styles.headerEscritorios}
          >

          <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
          />
            <Text style={styles.headerTexto}>{dia}</Text>
            <Text style={styles.headerTexto}>{mes}</Text>

          </Image>
          <ListView style={styles.elementos}
            dataSource={this.state.dataSource}
            renderRow={this.renderElemento.bind(this)}
            initialListSize={1}
            renderToHardwareTextureAndroid={true}
            />
    </View>
    )
  }

}
module.exports = dashboardView
