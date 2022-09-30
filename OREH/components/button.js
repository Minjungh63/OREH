import { useState } from 'react'
import { Text, Pressable, View } from 'react-native'
import styles from '../pages/styles.js'

export const Button = ({
  text,
  navigation,
  viewName,
  inputAns,
  ans,
  setIsWrongAns,
}) => {
  const [pressed, setPressed] = useState(false)
  const EnterAns = () => {
    if (text === 'Enter') {
      if (ans === inputAns) {
        navigation.navigate(viewName)
      } else {
        setIsWrongAns(true)
      }
    } else {
      navigation.navigate(viewName)
    }
  }
  return (
    <Pressable
      style={[
        pressed ? styles.PressedButtonBox : styles.buttonBox,
        text === 'Enter' && { width: '30%' },
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={EnterAns}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}
