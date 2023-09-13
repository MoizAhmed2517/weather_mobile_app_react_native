import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import React, {useEffect, useState} from 'react'
import Result from './Result'

export default function Quiz({navigation}) {
  const [questions, setQuestions] = useState([]);
  
  const getQuiz = async() => {

  }

  useEffect(() => {
    getQuiz();
  }, [third])
  

  return (
    <View style={styles.container}>
      
      <View style={styles.question}>
        <Text style={styles.questionText}>Q. Imagine this is a really cool question</Text>
      </View>

      <View style={styles.options}> 

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Cool option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Cool option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Cool option 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Cool option 4</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttons}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(Result)} style={styles.button}>
        <Text style={styles.buttonText}>END</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: '100%'
  },
  question: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1
  },
  buttons: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  button: {
    width: 'auto',
    backgroundColor: '#edae49',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 17,
    borderRadius: 5,
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
  questionText: {
    fontSize: 28,

  },
  optionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#00798c',
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fcfcfc'

  }
})