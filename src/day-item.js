//import code
import React, { Component } from 'react';
import {
  Text,
 } from 'react-native';



//Create
class DayItem extends Component{
  render(){
    return(
      <Text style={this.style()}>
      {this.props.day}
      </Text>
    )
  }
  style(){
    return(
      {
        'color':this.color(),
        'fontSize':this.fontSize(),
        'lineHeight':this.lineHeight(),
      }
    )
  }
  color(){
    var opacity = 1 / this.props.daysUntil
    return 'rgba(0,0,0,'+ opacity +')';

  }
  fontWeight(){
    var fontW = 7 - this.props.daysUntil * 100
    return fontW;
  }
  fontSize(){
    var size = 60-6*this.props.daysUntil
    return size
  }
  lineHeight(){
    return 70-4*this.props.daysUntil
  }
}
//styles
//export
module.exports = DayItem
