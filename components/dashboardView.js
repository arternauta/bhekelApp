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

const detalleElemento = require ('/bhekelApp/components/detalleElementoView')
const styles = require ('../styles')
const REQUEST_URL = 'http://ranking.bhekel.com/bhekelApp/oficinas.json'

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
  return(
    <TouchableOpacity onPress={()=>this.onElementoPressed(elemento)}>
        <Image source={{uri:'http://ranking.bhekel.com/bhekelApp/images/'+elemento.foto+'.jpg'}} style={styles.elemento}>
            <Text>{elemento.Puesto}</Text>
            <Text>{elemento.Nombre}</Text>
        </Image>
    </TouchableOpacity>

    )
}
render(){
    return(
      <View style={styles.container}>
          <ListView
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
