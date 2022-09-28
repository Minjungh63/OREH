import { Text, Pressable, View } from 'react-native'
import styles from '../pages/styles.js'

export const Button = ({ text, navigation, viewName }) => {
  return (
    <Pressable
      style={styles.buttonBox}
      onPress={() => navigation.navigate(viewName)}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}
