LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  LogBox,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Pressable,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native'
import styles from './styles'
import { STRING } from '../string'
import { THEME } from '../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UserContext from '../service/UserContext'
import { ModalWindow } from '../components/modal'

const StartView = ({ navigation }) => {
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
  const userContext = useContext(UserContext)
  const [name, setName] = useState('')
  const [isEnter, setIsEnter] = useState(false)
  const EnterBtn = () => {
    if (name.trim() === '') {
      setIsEnter(true)
    } else {
      userContext.setNickname(name)
      navigation.navigate('HomeView')
    }
  }
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        width: Dimensions.get('window').width,
        marginBottom: -10,
      }}
      resetScrollToCoords={{ y: Dimensions.get('screen').height }}
      scrollEnabled={false}
    >
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.bgImage}
      >
        <View
          style={{
            height: Dimensions.get('screen').height,
            backgroundColor: 'rgba(11, 2, 2, 0.7)',
          }}
        >
          <View style={styles.container}>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                height: Dimensions.get('screen').height * 0.2,
                paddingTop: '17%',
              }}
            >
              <Text
                style={{
                  fontFamily: THEME.titleFont,
                  color: THEME.lightBeige,
                  fontSize: 22,
                }}
              >
                경성일기 : 1919
              </Text>
            </View>
            <View
              style={{
                height: Dimensions.get('screen').height * 0.35,
                justifyContent: 'center',
              }}
            >
              <Image
                style={styles.iconImage}
                source={require('../assets/icon.png')}
              />
            </View>
            <View
              style={{
                height: Dimensions.get('screen').height * 0.3,
                justifyContent: 'space-evenly',
                width: '100%',
                marginRight: '5%',
              }}
            >
              <View style={{ alignItems: 'flex-end' }}>
                <TextInput
                  style={styles.nickNameText}
                  onChangeText={(e) => setName(e)}
                  value={name}
                  maxLength={9}
                  placeholder="닉네임을 입력하시오."
                  placeholderTextColor={'#C2BEBE'}
                />
              </View>
              <Pressable style={styles.startButtonBox} onPress={EnterBtn}>
                <Text style={styles.buttonText}>{STRING.start_buttonText}</Text>
              </Pressable>
            </View>
          </View>
          <ModalWindow
            open={isEnter}
            setOpen={setIsEnter}
            text={'\n\n닉네임을 입력해주세요.'}
            isHint={false}
          />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default StartView
