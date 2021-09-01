import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Weather({temp}) {
  return (
    <View style={styles.container}>
      <View style={styles.harfContainer}>
        <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.harfContainer} />
    </View>
  )
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42
  }, 
  harfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})