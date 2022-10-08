LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React from 'react'
import { View, Text, LogBox, SafeAreaView } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { STRING } from '../string'

const HomeView = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <View>
          <Text style={styles.basicText}>OREH(오래)</Text>
          <Text style={styles.titleText}>Ep. 독립운동가의 일기</Text>
        </View>
      </View>
      <Box text={STRING.guide} />
      <Button
        navigation={navigation}
        text={STRING.start_buttonText}
        viewName={'QuestStartView'}
      />
    </SafeAreaView>
  )
}

export default HomeView
