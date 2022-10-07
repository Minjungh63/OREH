import { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import styles from '../pages/styles.js'
import UserContext from '../service/UserContext.js'

export const TimerMenu = () => {
  const userContext = useContext(UserContext)
  return (
    <Text style={styles.timerText}>
      {parseInt(userContext.timer / 3600) / 10 >= 1
        ? parseInt(userContext.timer / 3600)
        : '0' + parseInt(userContext.timer / 3600)}{' '}
      :{' '}
      {(parseInt(userContext.timer / 60) % 60) / 10 >= 1
        ? parseInt(userContext.timer / 60) % 60
        : '0' + (parseInt(userContext.timer / 60) % 60)}
      :{' '}
      {(userContext.timer % 60) / 10 >= 1
        ? userContext.timer % 60
        : '0' + (userContext.timer % 60)}
    </Text>
  )
}
