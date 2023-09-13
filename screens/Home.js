import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MainHeading from '../components/MainHeading'
import Quiz from './Quiz'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <MainHeading />
        <View style={styles.bannerImage}>
            <Image source={require('../static/quizbanner.png')} style={styles.imageContainer} resizeMode='contain' />
        </View>
        <TouchableOpacity 
            onPress={() => navigation.navigate(Quiz) }
            style={styles.button}
        >
            <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        height: '100%'
    },
    bannerImage: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },
    imageContainer: {
        height: 300,
        width: 300,
    },
    button: {
        width: '100%',
        backgroundColor: '#edae49',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#a5a5a5',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '800',
    }
    
})