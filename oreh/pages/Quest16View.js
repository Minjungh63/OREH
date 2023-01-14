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

const Quest16View = ({ navigation }) => {
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
            <Text style={styles.basicText}>{STRING.date16}</Text>
          </View>
          <Box
            option={'quest'}
            hintNum={'Mission 16.\n\n'}
            text={STRING.quest16}
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
              viewName={'Quest17View'}
              inputAns={inputAns}
              ans={STRING.ans16}
              setIsWrongAns={setIsWrongAns}
            />
          </View>
          <ModalWindow
            open={hintOpen}
            setOpen={setHintOpen}
            text={STRING.hint16_1}
            text2={STRING.hint16_2}
            img5={require('../assets/quest_img/questImg16.png')}
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

export default Quest16View
