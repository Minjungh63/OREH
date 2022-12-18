LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useState } from 'react'
import {
  View,
  Text,
  LogBox,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { Input } from '../components/Input'
import { ModalWindow } from '../components/modal'
import { Header } from '../components/head'
import { STRING } from '../string'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Quest14View = ({ navigation }) => {
  const [inputAns, setInputAns] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [isWrongAns, setIsWrongAns] = useState(false)
  const [isHintFin, setIsHintFin] = useState(false)
  const [useHint, setUseHint] = useState(false)

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
          <Header
            setHintOpen={setHintOpen}
            setIsHintFin={setIsHintFin}
            useHint={useHint}
            setUseHint={setUseHint}
            timerStart={false}
          />
          <View
            style={{
              flex: 0.1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginTop: 15,
              paddingLeft: 10,
            }}
          >
            <Text style={styles.basicText}>{STRING.date14}</Text>
            <Text style={[styles.titleText, { fontSize: 27 }]}>
              {STRING.title14}
            </Text>
          </View>
          <Box
            option={'quest'}
            img4={require('../assets/quest_img/questImg14_1.png')}
            hintNum={'Mission 14.\n\n'}
          />
          <View
            style={{
              flex: 0.05,
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Input setInputAns={setInputAns} />
            <Button
              navigation={navigation}
              text={STRING.quest_buttonText}
              viewName={'Quest15View'}
              inputAns={inputAns}
              ans={STRING.ans14}
              setIsWrongAns={setIsWrongAns}
            />
          </View>
          <ModalWindow
            open={hintOpen}
            setOpen={setHintOpen}
            text={STRING.hint14_1}
            text2={STRING.hint14_2}
            img3={require('../assets/quest_img/questImg14_2.png')}
            isHint={true}
          />
          <ModalWindow
            open={isHintFin}
            setOpen={setIsHintFin}
            text={STRING.hintEndModalText}
            isHint={false}
          />
          <ModalWindow
            open={isWrongAns}
            setOpen={setIsWrongAns}
            text={STRING.wrongAnsModalText}
            isHint={false}
          />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default Quest14View
