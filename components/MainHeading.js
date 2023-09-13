import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainHeading() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzler</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: '#003d5b'
  }
})