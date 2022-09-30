import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { PARAGRAPH } from '../paragraph'
const HomeView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <View>
          <Text style={styles.basicText}>OREH(오래)</Text>
          <Text style={styles.titleText}>Ep. 독립운동가의 일기</Text>
        </View>
      </View>
      <Box text={PARAGRAPH.notice} />
      <Button
        navigation={navigation}
        text={'시작'}
        viewName={'QuestStartView'}
      />
    </View>
  )
}

export default HomeView
