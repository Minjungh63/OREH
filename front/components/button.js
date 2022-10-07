import { useContext, useState } from 'react'
import { Text, Pressable } from 'react-native'
import styles from '../pages/styles.js'
import UserContext from '../service/UserContext.js'

export const Button = ({
  text,
  navigation,
  viewName,
  inputAns,
  ans,
  setIsWrongAns,
}) => {
  const [pressed, setPressed] = useState(false)
  const userContext = useContext(UserContext)
  const EnterAns = () => {
    if (text === 'Enter') {
      if (ans === inputAns.trim()) {
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
