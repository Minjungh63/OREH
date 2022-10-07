import { useContext } from 'react'
import { Text } from 'react-native'
import styles from '../pages/styles.js'
import useInterval from '../service/useInterval.js'
import UserContext from '../service/UserContext.js'

export const TimerMenu = ({ start }) => {
  const userContext = useContext(UserContext)
  start &&
    useInterval(
      () => {
        userContext.setTimer((prevTimer) => prevTimer + 1)
      },
      userContext.isEnd === false ? 1000 : null,
    )
  return (
    <Text style={styles.timerText}>
      {new Date(userContext.timer * 1000).toISOString().substr(11, 8)}
    </Text>
  )
}
