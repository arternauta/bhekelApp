const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};




var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'blue',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'stretch'
  },
  headerEscritorios:{
    flex:2,
    justifyContent:'center',
    borderBottomWidth:3,
    borderColor:'white',
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  headerTexto:{
    textAlign:'center',
    color:'white',
    fontSize:30
  },
  circulo:{

    backgroundColor:'red',
    borderRadius:50/2,

  },
  elementos:{
    flex:6
  },
  elemento:{
    flex:5,
    backgroundColor:'pink',
    height:100,
    opacity:10
  },
  elementoContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'white'
  },
  puesto:{
    flex:15,
    color:'white',
    fontSize:50,
    textAlign:'center',
    fontWeight:"600",
    textShadowColor:'black',
    textShadowRadius:4,
    textShadowOffset:{width:3,height:3}
  },
  pais:{
    flex:8,
    color:'white',
    textAlign:'center'
  },
  nombresPuesto:{
    flex:25,
    textAlign:'center',
    color:'white',
  },

  chart: {
      marginRight: 20,
      height: 200,
  },
  foto:{
    flex:3,
  },
  cuerpo:{
    flex:7,
    backgroundColor:'pink'
  },
  centrado:{
    flex:1,
    justifyContent:'center'
  },
  fondo:{
    flex:1,
  },

title1: {
  textAlign:'center',
   fontSize: 28,
   fontWeight: '300',
   lineHeight: 34,
   letterSpacing: 0.364,
   color:'#FEFEFE',
 },
 title2: {
   fontSize: 22,
   fontWeight: '400',
   lineHeight: 28,
   letterSpacing: 0.352
 },
 title3: {
   fontSize: 20,
   fontWeight: '400',
   lineHeight: 24,
   letterSpacing: 0.38
 },
 headline: {
   fontSize: 17,
   fontWeight: '600',
   lineHeight: 22,
   letterSpacing: -0.408
 },
 body: {
   fontSize: 17,
   fontWeight: '400',
   lineHeight: 22,
   letterSpacing: -0.408
 },
 callout: {
   fontSize: 16,
   fontWeight: '400',
   lineHeight: 21,
   letterSpacing: -0.32
 },
 subhead: {
   fontSize: 15,
   fontWeight: '400',
   lineHeight: 20,
   letterSpacing: -0.24
 },
 footnote: {
   fontSize: 13,
   fontWeight: '400',
   lineHeight: 18,
   letterSpacing: -0.078
 },
 caption1: {
   fontSize: 12,
   fontWeight: '400',
   lineHeight: 16,
 },
 caption2: {
   fontSize: 11,
   fontWeight: '400',
   lineHeight: 16,
   letterSpacing: 0.066
 }

})
module.exports = styles
module.exports.constants = constants;
