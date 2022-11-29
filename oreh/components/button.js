import { useContext, useState } from 'react'
import { Text, Pressable, Linking } from 'react-native'
import styles from '../pages/styles.js'
import UserContext from '../service/UserContext.js'
import { STRING } from '../string'
export const Button = ({
  text,
  navigation,
  viewName,
  inputAns,
  ans,
  setIsWrongAns,
  tel,
}) => {
  const userContext = useContext(UserContext)
  const [pressed, setPressed] = useState(false)
  const EnterAns = () => {
    if (text === STRING.quest_buttonText) {
      if (ans === inputAns.trim()) {
        userContext.setRecordList([
          ...userContext.recordList,
          userContext.timer,
        ])
          if(tel){
              Linking.openURL(`tel:07045717849`)
          }
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
        text === STRING.quest_buttonText && { width: '30%' },
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={EnterAns}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}
