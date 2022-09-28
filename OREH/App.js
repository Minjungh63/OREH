import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import HomeView from './pages/HomeView'
import questStartView from './pages/questStartView'
import * as Font from 'expo-font'
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeView"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen name="questStartView" component={questStartView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
