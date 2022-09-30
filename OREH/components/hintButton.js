import { Pressable, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const HintButton = () => {
  return (
    <Pressable
      style={{ alignItems: 'flex-end' }}
      onPress={() => {
        Linking.openURL('https://open.kakao.com/o/g7bf0bze')
      }}
    >
      <Icon name="chatbubble-outline" size={30} color="white" />
    </Pressable>
  )
}
