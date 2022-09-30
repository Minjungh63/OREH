import { TextInput } from 'react-native'
import styles from '../pages/styles.js'

export const Input = ({ setInputAns }) => {
  return (
    <TextInput
      placeholder="Type here..."
      onChangeText={setInputAns}
      style={styles.inputBox}
    ></TextInput>
  )
}
