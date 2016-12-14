'use strict'

import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Text,
   ScrollView,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';

const styles = require('../styles')

class loginView extends Component{
  render(){

return(

<View style={styles.fondo}>
        <Image source={{uri:'http://s3-us-west-2.amazonaws.com/fahrenheit/wp-content/uploads/2016/04/01133749/las-5-ciudades-mas-populares-cine-RS.jpg'}} style={styles.centrado}>
          <TouchableHighlight onPress={()=>this.onLogin("OFICIAL")}>
            <Text style={styles.title1}>Ranking Oficial</Text>
          </TouchableHighlight>
        </Image>
        <Image source={{uri:'http://www.hdfondos.eu/pictures/2013/1216/1/tennis-ball-sport-images-173940.jpg'}} style={styles.centrado}>
        <TouchableHighlight onPress={()=>this.onLogin("TENIS")}>
          <Text style={styles.title1}>Ranking Tenis</Text>
        </TouchableHighlight>
        </Image>
        <Image source={{uri:'http://asfonseca.com/wp-content/uploads/2014/04/videos-startups.jpg'}} style={styles.centrado}>
        <TouchableHighlight onPress={()=>this.onLogin("VIDEOS")}>
          <Text style={styles.title1}>Videos</Text>
        </TouchableHighlight>
      </Image>
</View>

    )
}
onLogin(param){

  switch (param) {
    case "OFICIAL":{
      this.props.navigator.push({
        title:'Dashboard',
        name:'Dashboard',
        passProps:{}
      })
      break
    }

    case "TENIS":{
      this.props.navigator.push({
        title:'Ranking LTB',
        name:'Tenis',
        passProps:{}
      })
      break
    }

    case "VIDEOS":{
      this.props.navigator.push({
        title:'Videos',
        name:'Videos',
        passProps:{}
      })
      break
    }
  }
}
}


module.exports = loginView
