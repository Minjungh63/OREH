import { useContext } from 'react'
import { Text } from 'react-native'
import styles from '../pages/styles.js'
import useInterval from '../service/useInterval.js'
import UserContext from '../service/UserContext.js'
import timeFormat from '../service/timeFormat.js'
export const TimerMenu = ({ start }) => {
  const userContext = useContext(UserContext)
  start &&
    useInterval(
      () => {
        userContext.setTimer((prevTimer) => prevTimer + 1)
      },
      userContext.isEnd === false ? 1000 : null,
    )
  return <Text style={styles.timerText}>{timeFormat(userContext.timer)}</Text>
}
