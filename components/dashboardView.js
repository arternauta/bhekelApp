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
  ToolbarAndroid,
  TouchableOpacity
} from 'react-native';

import Svg, {Circle} from 'react-native-svg'

import Icon from 'react-native-vector-icons/FontAwesome';

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
//
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
//
 onElementoPressed(elemento){

   this.props.navigator.push({
     name: 'Detalles',
     passProps: {elemento: elemento}
   })

 }
// //
 renderElemento(elemento){
   var urlImage = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/SantaCruzRank.png'
     urlImage += '?random_number='+new Date().getTime()
   return(
     <TouchableOpacity>
           <View style={styles.elementoContainer}>
             <View style={styles.puestoWrap}>
               <Text style={styles.corazon}>{elemento.Puesto}</Text>
             </View>
             <Text style={styles.pais}>{elemento.Escritorio}</Text>
             <Icon style={styles.icono} name="bar-chart" onPress={()=>this.onElementoPressed(elemento)}/>
           </View>
     </TouchableOpacity>

     )
 }
render(){
  // var urlHeader = 'http://ranking.bhekel.com/bhekelApp/RankingListaOficinas/header.jpg'
  //   urlHeader += '?random_number='+new Date().getTime()
    return(
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <View elevation={3} style={styles.medioTop}>
          <View style={styles.talkBubble}>
            <View style={styles.talkBubbleSquare}>
              <Icon style={styles.corazon} name="bars"/>
              <Text style={styles.corazon}>Ranking Oficinas</Text>
              <Icon name="home" style={styles.corazon}/>
            </View>
            <View style={styles.talkBubbleTriangle} />
          </View>
        <View style={styles.logoWrap}>
          <View style={styles.stretch}>
            <Image source={{uri:'http://ranking.bhekel.com/bhekelApp/images/logo.png'}} style={styles.logo}/>
          </View>

          <View style={styles.bhekel}>
          <Text style={styles.fontBhekel}>
            Bhekel
          </Text>
          <View style={styles.botonFrase}>
              <Text style={styles.frase}>Facebook.com/Bhekel</Text>
              <View style={styles.corazonWrap}>
              <Icon style={styles.corazon} name="heart"/>
              </View>
          </View>
            </View>
        </View>
        </View>
        <View style={styles.descripcionWrap}>
          <View style={styles.puntosWrap}>
          <Icon name="star" size={25} />
          <Text style={{'fontWeight':'bold'}}>45871</Text>
          <Text>PUNTOS</Text>

          </View>
          <Text style={styles.puesto}>01</Text>
          <View style={styles.datos}>
          <Text>Fatima Hermosa</Text>
          <Text>Karen Alvarez</Text>
          <Text style={{'fontWeight':'bold'}}>Bolivia</Text>
          </View>
        </View>
      </View>
      <View style={styles.rankingWrap}>
        <ListView style={styles.elementos}
          dataSource={this.state.dataSource}
          renderRow={this.renderElemento.bind(this)}
          initialListSize={1}
          renderToHardwareTextureAndroid={true}
          />
      </View>
    </View>
    )
  }

}
module.exports = dashboardView
