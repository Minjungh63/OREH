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

const Quest4View = ({ navigation }) => {
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
            <Text style={styles.basicText}>{STRING.date4}</Text>
            <Text style={styles.titleText}>{STRING.title4}</Text>
          </View>
          <Box
            option={'quest'}
            img4={require('../assets/quest_img/questImg4.png')}
            hintNum={'Mission 04.\n\n'}
            text={STRING.quest4}
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
              viewName={'Quest5View'}
              inputAns={inputAns}
              ans={STRING.ans4}
              setIsWrongAns={setIsWrongAns}
            />
          </View>
          <ModalWindow
            open={hintOpen}
            setOpen={setHintOpen}
            text={STRING.hint4_1}
            text2={STRING.hint4_2}
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

export default Quest4View
