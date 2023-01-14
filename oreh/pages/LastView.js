LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useEffect } from 'react'
import {
  View,
  Text,
  LogBox,
  ImageBackground,
  Dimensions,
  StatusBar,
  Pressable,
  Linking,
  BackHandler,
  Alert,
} from 'react-native'
import styles from './styles'
import { Box } from '../components/box'
import { THEME } from '../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const LastView = () => {
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
  const goInstagram = () => {
    Linking.openURL('https://instagram.com/oreh__oreh?igshid=YmMyMTA2M2Y=')
  }
  const goMoreWebtoon = () => {
    Linking.openURL('https://link-page.kakao.com/goto_view?series_id=57569907')
  }
  const contact = () => {
    Linking.openURL('https://forms.gle/bCN4ybSUUxsv7FfF9')
  }
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
        style={[styles.bgImage, { flex: 1 }]}
      >
        <View style={styles.container}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: 30,
              marginBottom: -Dimensions.get('window').height * 0.08,
            }}
          >
            <Text
              style={{
                fontFamily: THEME.titleFont,
                color: THEME.buttonColor,
                fontSize: 17,
              }}
            >
              경성일기 : 1919
            </Text>
          </View>
          <View
            style={{
              flex: 0.1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginTop: 15,
              paddingLeft: 10,
            }}
          ></View>
          <Box option={'quest'} webtoon={true} />
          <View
            style={{
              flex: 0.05,
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Pressable style={styles.smallButtonBox} onPress={goInstagram}>
              <Text style={styles.smallButtonText}>인스타그램</Text>
            </Pressable>
            <Pressable style={styles.smallButtonBox} onPress={goMoreWebtoon}>
              <Text style={styles.smallButtonText}>웹툰 더보기</Text>
            </Pressable>
            <Pressable style={styles.smallButtonBox} onPress={contact}>
              <Text style={styles.smallButtonText}>의견 보내기!</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default LastView
