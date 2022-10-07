import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useEffect, useRef, useState } from 'react'
import HomeView from './pages/HomeView'
import QuestStartView from './pages/QuestStartView'
import Quest1View from './pages/Quest1View'
import Quest2View from './pages/Quest2View'
import Quest3View from './pages/Quest3View'
import Quest4View from './pages/Quest4View'
import ResultView from './pages/ResultView'
import * as Font from 'expo-font'
import UserContext from './service/UserContext'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [hintCount, setHintCount] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  const valList = {
    hintCount,
    setHintCount,
    timer,
    setTimer,
    isEnd,
    setIsEnd,
  }
  let FontList = {
    NanumSquareR: require('./assets/fonts/NanumSquareR.ttf'),
    HBIOS_SYS: require('./assets/fonts/HBIOS-SYS.ttf'),
  }
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(FontList)
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])
  if (!appIsReady) {
    return null
  }
  const Stack = createStackNavigator()
  return (
    <UserContext.Provider value={valList}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeView"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen name="QuestStartView" component={QuestStartView} />
          <Stack.Screen name="Quest1View" component={Quest1View} />
          <Stack.Screen name="Quest2View" component={Quest2View} />
          <Stack.Screen name="Quest3View" component={Quest3View} />
          <Stack.Screen name="Quest4View" component={Quest4View} />
          <Stack.Screen name="ResultView" component={ResultView} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  )
}
