LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useContext, useEffect } from 'react'
import {
  View,
  Text,
  LogBox,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { STRING } from '../string'
import { THEME } from '../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UserContext from '../service/UserContext'
import timeFormat from '../service/timeFormat.js'

const ResultView = ({ navigation }) => {
  const userContext = useContext(UserContext)
  useEffect(() => {
    userContext.setIsEnd(true)
  }, [])
  useEffect(() => {
    const backAction = () => {
      Alert.alert('', '앱을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        { text: '종료', onPress: () => BackHandler.exitApp() },
      ])
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => backHandler.remove()
  }, [])
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        width: Dimensions.get('window').width,
      }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={[styles.bgImage, { height: Dimensions.get('screen').height }]}
      >
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: Dimensions.get('screen').height * 0.05,
            }}
          >
            <Text
              style={{
                fontFamily: THEME.titleFont,
                color: THEME.buttonColor,
                fontSize: 20,
              }}
            >
              경성일기 : 1919
            </Text>
            <Image
              style={{ width: 35, height: 35, resizeMode: 'cover' }}
              source={require('../assets/dark_icon.png')}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginTop: 15,
              paddingLeft: 10,
            }}
          >
            <Text
              style={[
                styles.titleText,
                { fontSize: 23, height: Dimensions.get('window').height * 0.1 },
              ]}
            >
              {STRING.title24}
            </Text>
          </View>
          <Box
            option={'quest'}
            name={userContext.nickname + '님의'}
            text={
              STRING.quest24 + timeFormat(userContext.timer) + STRING.quest24_2
            }
          />
          <Button navigation={navigation} text={'NEXT'} viewName={'LastView'} />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default ResultView
