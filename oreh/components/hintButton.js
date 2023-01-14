import { Pressable, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export const HintButton = () => {
  return (
    <Pressable
      style={{ alignItems: 'flex-end' }}
      onPress={() => {
        Linking.openURL('http://pf.kakao.com/_SEmJxj')
      }}
    >
    <Ionicons name="chatbubble" size={28} color="white" />
    </Pressable>
  )
}
