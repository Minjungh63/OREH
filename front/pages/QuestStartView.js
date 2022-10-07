LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useContext, useEffect } from 'react'
import { View, Text, LogBox, SafeAreaView } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { HintButton } from '../components/hintButton'
import { Box } from '../components/box'
import { PARAGRAPH } from '../paragraph'
import UserContext from '../service/UserContext'
import { useIsFocused } from '@react-navigation/native'

const QuestStartView = ({ navigation }) => {
  const userContext = useContext(UserContext)
  const isFocused = useIsFocused()
  useEffect(() => {
    userContext.setTimer(0)
    userContext.setIsEnd(false)
    userContext.setHintCount(0)
  }, [isFocused])
  return (
    <SafeAreaView style={styles.questContainer}>
      <HintButton />
      <Box option={'quest'} text={PARAGRAPH.questStart} />
      <View style={{ justifyContent: 'space-evenly', flex: 0.1 }}>
        <Text style={styles.questText}>퀘스트를 시작할 준비가 되었다면,</Text>
        <Text style={styles.questText}>아래의 버튼을 눌러주세요.</Text>
      </View>
      <View style={{ flex: 0.1 }}>
        <Button navigation={navigation} text={'시작'} viewName={'Quest1View'} />
      </View>
    </SafeAreaView>
  )
}

export default QuestStartView
