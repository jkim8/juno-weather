import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';


const API_KEY = "2490e30a07ecb7702384c40f37a2cbfc"

export default class extends React.Component {

  state = {
    isLoading: true
  }
  getWeather = async( latitude, longitude ) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      )
      console.log(data)
  }
  getLocation = async() => {
    try {
      await Location.getForegroundPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      this.setState({ isLoading: false })
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't fine you", "So sad")
    }
  }

  componentDidMount(){
    this.getLocation()
  }

  render() {

    const { isLoading } = this.state
    return isLoading ? <Loading/> : null
  }
}

