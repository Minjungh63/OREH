import { FontAwesome } from '@expo/vector-icons';
import { useContext, useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import styles from '../pages/styles'
import UserContext from '../service/UserContext'

export const ShortHint = ({
  setHintOpen,
  setIsHintFin,
  useHint,
  setUseHint,
}) => {
  const userContext = useContext(UserContext)
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        marginRight: 10,
      }}
    >
      <Pressable
        style={{ alignItems: 'center' }}
        onPressIn={() => {
          if (userContext.hintCount >= 3) {
            if (useHint) setHintOpen(true)
            else setIsHintFin(true)
          } else {
            setHintOpen(true)
            !useHint && userContext.setHintCount(userContext.hintCount + 1)
          }
        }}
        onPressOut={() => !useHint && setUseHint(true)}
      >
        <FontAwesome name="flag" size={25} color="white" />
        <Text style={styles.hintCountText}>({userContext.hintCount}/3)</Text>
      </Pressable>
    </View>
  )
}
