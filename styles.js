const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};




var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#eaeaea',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'stretch',
  },
  headerWrap:{
  flex:1,
  backgroundColor:'white'
  },
  rankingWrap:{
    flex:1,
    backgroundColor:'white'
  },
  logo:{
    flex:1,
  },
  bhekelWrap:{
    flex:3
  },
  menuTop:{
    margin:10,
    padding:20,
    backgroundColor:'#44b39d'
  },
  logoWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'center',
  },
  medioTop:{
    backgroundColor:'#cecece',
    padding:15,
  },
  bhekel:{
    flex:3,
  },
  fontBhekel:{
    fontWeight:'bold',
    fontSize:60,
  },
  frase:{
    marginRight:10,
    padding:5,
    backgroundColor:'#44b39d',
  },
  descripcionWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'#8aa3ff',
    padding:10
  },
  puntosWrap:{
    flexDirection:'column',
    alignItems:'flex-end'
  },
  puesto:{
    color:'#bf4a67',
    fontSize:80
  },
  datos:{
    flexDirection:'column'
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
  circulo:{

    backgroundColor:'red',
    borderRadius:50/2,

  },
  elementoContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'white',
    backgroundColor:'#bf4a67',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    padding:25,
  },
  chart: {
      marginRight: 20,
      height: 200,
  },
  foto:{
    flex:3,
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
 },
 stretch: {
    width: 100,
    height: 100
  }

})
module.exports = styles
module.exports.constants = constants;
