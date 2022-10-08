LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, LogBox, SafeAreaView } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { Input } from '../components/Input'
import { ModalWindow } from '../components/modal'
import { Header } from '../components/head'
import UserContext from '../service/UserContext'
import { STRING } from '../string'
import { axios_post } from '../service/api'
import timeFormat from '../service/timeFormat'

const ResultView = ({ navigation }) => {
  const [inputAns, setInputAns] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [isWrongAns, setIsWrongAns] = useState(false)
  const [isHintFin, setIsHintFin] = useState(false)
  const [useHint, setUseHint] = useState(false)
  const userContext = useContext(UserContext)
  const sendRecord = async () => {
    try {
      await axios_post('record', {
        userId: userContext.userId,
        q1: timeFormat(userContext.recordList[0]),
        q2: timeFormat(userContext.recordList[1] - userContext.recordList[0]),
        q3: timeFormat(userContext.recordList[2] - userContext.recordList[1]),
        q4: timeFormat(userContext.recordList[3] - userContext.recordList[2]),
      })
    } catch (e) {
      console.log('기록 전송 에러: ' + e)
    }
  }
  useEffect(() => {
    userContext.setIsEnd(true)
    sendRecord()
  }, [])
  return (
    <SafeAreaView style={styles.questContainer}>
      <Header
        setHintOpen={setHintOpen}
        setIsHintFin={setIsHintFin}
        useHint={useHint}
        setUseHint={setUseHint}
      />
      <View
        style={{
          flex: 0.05,
          justifyContent: 'flex-end',
          paddingBottom: 10,
          paddingLeft: 10,
        }}
      >
        <Text style={styles.basicText}>1918년 10월 1일</Text>
      </View>
      <Box option={'quest'} text={STRING.quest4} />
      <View
        style={{
          flex: 0.1,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Input setInputAns={setInputAns} />
        <Button
          navigation={navigation}
          text={STRING.quest_buttonText}
          viewName={'HomeView'}
          inputAns={inputAns}
          ans={STRING.ans4}
          setIsWrongAns={setIsWrongAns}
        />
      </View>
      <ModalWindow
        open={hintOpen}
        setOpen={setHintOpen}
        text={STRING.hint4}
        isHint={true}
      />
      <ModalWindow
        open={isHintFin}
        setOpen={setIsHintFin}
        text={STRING.hintEndModalText}
        isHint={false}
      />
      <ModalWindow
        open={isWrongAns}
        setOpen={setIsWrongAns}
        text={STRING.wrongAnsModalText}
        isHint={false}
      />
    </SafeAreaView>
  )
}

export default ResultView
