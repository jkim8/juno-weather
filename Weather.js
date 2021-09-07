import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  }
}



export default function Weather({temp}) {
  return (
      <LinearGradient
        colors={weatherOptions["Haze"].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.harfContainer}>
          <MaterialCommunityIcons name={weatherOptions["Haze"].iconName} size={96} color="white" />
          <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.harfContainer} />
      </LinearGradient>
  )
}

Weather.propTypes = {
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
    fontSize: 42,
    color: "white"
  }, 
  harfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})