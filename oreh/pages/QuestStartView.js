LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useContext, useEffect } from 'react'
import { View, Text, LogBox, SafeAreaView } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { HintButton } from '../components/hintButton'
import { Box } from '../components/box'
import UserContext from '../service/UserContext'
import { STRING } from '../string'

const QuestStartView = ({ navigation }) => {
  const userContext = useContext(UserContext)
  useEffect(() => {
    userContext.setTimer(0)
    userContext.setIsEnd(false)
    userContext.setHintCount(0)
    userContext.setRecordList([])
  }, [])
  return (
    <SafeAreaView style={styles.questContainer}>
      <HintButton />
      <Box option={'quest'} text={STRING.mission} />
      <View style={{ justifyContent: 'space-evenly', flex: 0.1 }}>
        <Text style={styles.questText}>{STRING.questStartText}</Text>
      </View>
      <View style={{ flex: 0.1 }}>
        <Button
          navigation={navigation}
          text={STRING.start_buttonText}
          viewName={'Quest1View'}
        />
      </View>
    </SafeAreaView>
  )
}

export default QuestStartView
