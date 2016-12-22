import React, { Component, PropTypes } from 'react'
import { View, Easing, StyleSheet, Animated, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
let styles

class sideMenu extends Component {
  constructor () {
    super()
    this.state = {
      toggled: false
    }
    this.AnimatedLeft = new Animated.Value(0)
  }
  toggleMenu () {
    const { menuWidth } = this.props
    let toValue = menuWidth || (width - 80)
    if (this.state.toggled) {
      toValue = 0
    }
    Animated.timing(this.AnimatedLeft, {
      toValue,
      duration: 250,
      easing: Easing.inout }).start(() => {
        this.setState({
          toggled: !this.state.toggled
        })
      })
  }
  render () {
    const { children, menuWidth, MenuComponent } = this.props
    return (
      <View style={styles.container}>
<Text>
  Heloo
</Text>
      </View>
    )
  }
}

sideMenu.propTypes = {
  menuWidth: PropTypes.number,
  MenuComponent: PropTypes.element
}

sideMenu.propTypes = {}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appView: {
    flex: 1,
    width
  },
  sideMenu: {
    backgroundColor: '#898989',
    flex: 1,
    position: 'absolute',
    height
  }
})

module.exports = sideMenu
