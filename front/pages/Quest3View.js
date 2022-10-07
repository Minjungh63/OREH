LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useState } from 'react'
import { View, Text, LogBox } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { Input } from '../components/Input'
import { PARAGRAPH } from '../paragraph'
import { ModalWindow } from '../components/modal'
import { Header } from '../components/head'

const Quest1View = ({ navigation }) => {
  const [inputAns, setInputAns] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [isWrongAns, setIsWrongAns] = useState(false)
  const [isHintFin, setIsHintFin] = useState(false)
  const [useHint, setUseHint] = useState(false)

  return (
    <View style={styles.questContainer}>
      <Header
        setHintOpen={setHintOpen}
        setIsHintFin={setIsHintFin}
        useHint={useHint}
        setUseHint={setUseHint}
      />
      <View
        style={{
          flex: 0.05,
          justifyContent: 'flex-end',
          paddingBottom: 10,
          paddingLeft: 10,
        }}
      >
        <Text style={styles.basicText}>1918년 10월 1일</Text>
      </View>
      <Box option={'quest'} text={PARAGRAPH.quest3} />
      <View
        style={{
          flex: 0.1,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Input setInputAns={setInputAns} />
        <Button
          navigation={navigation}
          text={'Enter'}
          viewName={'Quest4View'}
          inputAns={inputAns}
          ans={PARAGRAPH.ans3}
          setIsWrongAns={setIsWrongAns}
        />
      </View>
      <ModalWindow
        open={hintOpen}
        setOpen={setHintOpen}
        text={PARAGRAPH.hint3}
        isHint={true}
      />
      <ModalWindow
        open={isHintFin}
        setOpen={setIsHintFin}
        text={'힌트를 모두 사용하셨습니다.'}
        isHint={false}
      />
      <ModalWindow
        open={isWrongAns}
        setOpen={setIsWrongAns}
        text={'오답입니다.'}
        isHint={false}
      />
    </View>
  )
}

export default Quest1View
