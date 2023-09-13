import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './Home'

export default function Result({navigation}) {
  return (
    <View>

      <View>
        <Text>This will give you result</Text>
      </View>

      <View style={styles.bannerImage}>
        <Image source={require('../static/quizbanner.png')} style={styles.imageContainer} resizeMode='contain' />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate(Home)}>
          <Text>Back to home</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  bannerImage: {
      marginTop: -20,
      justifyContent: "center",
      alignItems: 'center',
  },
  imageContainer: {
      height: 300,
      width: 300,
  }
})