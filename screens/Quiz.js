import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import React, {useEffect, useState} from 'react'
import Result from './Result'

const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Quiz({navigation}) {
  const [questions, setQuestions] = useState([]);
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore]= useState(0);
  const [isloading, setIsloading] = useState(false)
  
  const getQuiz = async() => {
    setIsloading(true)
    const url ="https://opentdb.com/api.php?amount=10&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsloading(false)
  };

  useEffect(() => {
    getQuiz();
  }, [])

  const handleNextPress=()=>{
    setQues(ques+1)
    setOptions(generateOptionsAndShuffle(questions[ques+1]))
  }

  const generateOptionsAndShuffle=(_question)=>{
    const options= [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
  }

  const handlSelectedOption=(_option)=>{
    if(_option===questions[ques].correct_answer){
      setScore(score+10)
    }
    if(ques!==9){
      setQues(ques+1)
      setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }
    if(ques===9){
      handleShowResult()
    }
  }

  const handleShowResult=()=>{
    navigation.navigate('Result', {
      score: score
    })
  }
  

  return (
    <View style={styles.container}>


      {isloading ?

      <View>
        <Text style={styles.loadingText}>Loading...</Text>
      </View> :

      questions.length > 0 && (

        <View style={styles.parent}>

          <View style={styles.question}>
            <Text style={styles.questionText}>Q. {questions[ques].question}</Text>
          </View>

          <View style={styles.options}> 

            <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(options[0])}>
              <Text style={styles.optionText}>{options[0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(options[1])}>
              <Text style={styles.optionText}>{options[1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(options[2])}>
              <Text style={styles.optionText}>{options[2]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(options[3])}>
              <Text style={styles.optionText}>{options[3]}</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.buttons}>

            {ques!==9 &&<TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> }

            {ques===9 &&<TouchableOpacity style={styles.button} onPress={handleShowResult}>
              <Text style={styles.buttonText}>SHOW RESULTS</Text>
            </TouchableOpacity> }

          </View>

        </View>

        )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: '100%'
  },
  parent: {
    height: '100%',
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

  },
  loadingText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: '#003d5b'
  }
})