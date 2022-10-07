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
