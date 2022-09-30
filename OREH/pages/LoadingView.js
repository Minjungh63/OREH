import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
const questStartView = ({ navigation }) => {
  return (
    <View style={styles.questContainer}>
      <Text style={[styles.questText, { paddingTop: '15%' }]}>
        조금만 기다려주세요
      </Text>
    </View>
  )
}

export default questStartView
