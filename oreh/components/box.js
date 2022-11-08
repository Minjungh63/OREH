import { ScrollView, Text, View } from 'react-native'
import styles from '../pages/styles.js'

export const Box = ({ text, option }) => {
  return (
    <View style={option === 'quest' ? styles.questBox : styles.textBox}>
      {option === 'quest' ? (
        <Text style={styles.questText}>{text}</Text>
      ) : (
        <ScrollView>
          <Text style={styles.noticeText}>{text}</Text>
        </ScrollView>
      )}
    </View>
  )
}
