import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useEffect, useRef, useState } from 'react'
import HomeView from './pages/HomeView'
import StartView from './pages/StartView'
import Quest1View from './pages/Quest1View'
import Quest2View from './pages/Quest2View'
import Quest3View from './pages/Quest3View'
import Quest4View from './pages/Quest4View'
import Quest5View from './pages/Quest5View'
import Quest6View from './pages/Quest6View'
import Quest7View from './pages/Quest7View'
import Quest8View from './pages/Quest8View'
import Quest9View from './pages/Quest9View'
import Quest10View from './pages/Quest10View'
import Quest11View from './pages/Quest11View'
import Quest12View from './pages/Quest12View'
import Quest13View from './pages/Quest13View'
import Quest14View from './pages/Quest14View'
import Quest15View from './pages/Quest15View'
import Quest16View from './pages/Quest16View'
import Quest17View from './pages/Quest17View'
import Quest18View from './pages/Quest18View'
import Quest19View from './pages/Quest19View'
import ResultView from './pages/ResultView'
import * as Font from 'expo-font'
import UserContext from './service/UserContext'

export default function App() {
  const [userId, setUserId] = useState(1)
  const [appIsReady, setAppIsReady] = useState(false)
  const [hintCount, setHintCount] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  const [recordList, setRecordList] = useState([])
  const [nickname, setNickname] = useState("")
  const valList = {
    userId,
    setUserId,
    hintCount,
    setHintCount,
    timer,
    nickname,
    setTimer,
    isEnd,
    setIsEnd,
    recordList,
    setRecordList,
    setNickname,
  }
  let FontList = {
    NanumSquareR: require('./assets/fonts/NanumSquareR.ttf'),
    HBIOS_SYS: require('./assets/fonts/HBIOS-SYS.ttf'),
    Kim_Gu: require('./assets/fonts/Kim-Gu.ttf'),
    NanumMyeongjo: require('./assets/fonts/NanumMyeongjoBold.ttf'),
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
          initialRouteName="StartView"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="StartView" component={StartView} />
          <Stack.Screen name="HomeView" component={HomeView} />
          <Stack.Screen name="Quest1View" component={Quest1View} />
          <Stack.Screen name="Quest2View" component={Quest2View} />
          <Stack.Screen name="Quest3View" component={Quest3View} />
          <Stack.Screen name="Quest4View" component={Quest4View} />
          <Stack.Screen name="Quest5View" component={Quest5View} />
          <Stack.Screen name="Quest6View" component={Quest6View} />
          <Stack.Screen name="Quest7View" component={Quest7View} />
          <Stack.Screen name="Quest8View" component={Quest8View} />
          <Stack.Screen name="Quest9View" component={Quest9View} />
          <Stack.Screen name="Quest10View" component={Quest10View} />
          <Stack.Screen name="Quest11View" component={Quest11View} />
          <Stack.Screen name="Quest12View" component={Quest12View} />
          <Stack.Screen name="Quest13View" component={Quest13View} />
          <Stack.Screen name="Quest14View" component={Quest14View} />
          <Stack.Screen name="Quest15View" component={Quest15View} />
          <Stack.Screen name="Quest16View" component={Quest16View} />
          <Stack.Screen name="Quest17View" component={Quest17View} />
          <Stack.Screen name="Quest18View" component={Quest18View} />
          <Stack.Screen name="Quest19View" component={Quest19View} />
          <Stack.Screen name="ResultView" component={ResultView} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  )
}
