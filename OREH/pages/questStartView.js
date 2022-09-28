import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { HintButton } from '../components/hintButton'
import { Box } from '../components/box'
import { PARAGRAPH } from '../paragraph'
const HomeView = ({ navigation }) => {
  return (
    <View style={styles.questContainer}>
      <HintButton />
      <Box option={'quest'} text={PARAGRAPH.questStart} />
      <View style={{ justifyContent: 'space-evenly', flex: 0.2 }}>
        <Text style={[styles.questText, { paddingTop: '15%' }]}>
          퀘스트를 시작할 준비가 되었다면,
        </Text>
        <Text style={styles.questText}>아래의 버튼을 눌러주세요.</Text>
      </View>
      <Button navigation={navigation} text={'시작'} viewName={'HomeView'} />
    </View>
  )
}

export default HomeView
