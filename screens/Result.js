import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './Home'

export default function Result({navigation, route}) {

  const {score} = route.params

  const scoreImage = score >= 50 ? require('../static/victory.png') : require('../static/failure.png')

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>RESULT</Text>
      </View>

      <Text style={styles.scoreValue}>{score} / 100</Text>

      <View style={styles.bannerImage}>
        <Image source={scoreImage} style={styles.imageContainer} resizeMode='contain' />
      </View>

      <View style={styles.buttons} onPress={() => navigation.navigate(Home)}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back to home</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  bannerImage: {
      justifyContent: "center",
      alignItems: 'center',
      flex: 1
  },
  imageContainer: {
      height: 300,
      width: 300,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  buttons: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  button: {
    width: '100%',
    backgroundColor: '#edae49',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 17,
    borderRadius: 32,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#bcbcbc',
    marginBottom: 20,
  },
  buttonText: {
      fontSize: 17,
      color: '#fff',
      fontWeight: '800',
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: '#003d5b'
  },
  textContainer: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center'
  }
})