import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { weather } from 'cli-spinners'


export default function Weather({temp}) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  )
}

weather.PropTypes = {
  temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})