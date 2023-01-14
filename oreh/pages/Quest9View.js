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

const Quest9View = ({ navigation }) => {
  const [hintOpen, setHintOpen] = useState(false)
  const [isHintFin, setIsHintFin] = useState(false)
  const [useHint, setUseHint] = useState(false)
  const [isPop, setIsPop] = useState(true)
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
            hintBtnHide={true}
          />
          <View
            style={{
              flex: 0.1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          ></View>
          <Box
            option={'quest'}
            hintNum={'Instruction 09.\n\n'}
            text={STRING.quest9}
          />
          <View
            style={{
              flex: 0.05,
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Button
              navigation={navigation}
              text={'OK'}
              viewName={'Quest10View'}
            />
          </View>
          <ModalWindow
            open={isPop}
            setOpen={setIsPop}
            text={STRING.pop9}
            isHint={false}
            isPop={true}
          />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default Quest9View
