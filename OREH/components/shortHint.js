import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useContext, useState } from 'react'
import { View, Pressable } from 'react-native'
import UserContext from '../service/UserContext'

export const ShortHint = ({ setHintOpen }) => {
  const userContext = useContext(UserContext)
  const [useHint, setUseHint] = useState(false)
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        marginRight: 10,
      }}
    >
      <Pressable
        style={{ alignItems: 'flex-end' }}
        onPress={() => {
          setHintOpen(true)
          {
            !useHint &&
              setUseHint(true) &&
              userContext.setHintCount(userContext.hintCount + 1)
          }
        }}
      >
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={35}
          color="yellow"
        />
      </Pressable>
    </View>
  )
}
