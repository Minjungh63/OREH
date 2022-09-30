import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { HintButton } from '../components/hintButton'
import { ShortHint } from '../components/shortHint'
import { Box } from '../components/box'
import { Input } from '../components/Input'
import { PARAGRAPH } from '../paragraph'
import { ModalWindow } from '../components/modal'

const Quest1View = ({ navigation }) => {
  const [inputAns, setInputAns] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [isWrongAns, setIsWrongAns] = useState(false)
  return (
    <View style={styles.questContainer}>
      <View
        style={{
          flex: 0.05,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <ShortHint hintText={PARAGRAPH.hint1} setHintOpen={setHintOpen} />
        <HintButton />
      </View>
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
      <Box option={'quest'} text={PARAGRAPH.quest1} />
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
          viewName={'HomeView'}
          inputAns={inputAns}
          ans={PARAGRAPH.ans1}
          setIsWrongAns={setIsWrongAns}
        />
      </View>
      <ModalWindow
        open={hintOpen}
        setOpen={setHintOpen}
        text={PARAGRAPH.hint1}
        isHint={true}
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
