LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useState } from 'react'
import { View, Text, LogBox, SafeAreaView, ImageBackground, Dimensions, Image,StatusBar  } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { Input } from '../components/Input'
import { ModalWindow } from '../components/modal'
import { Header } from '../components/head'
import { STRING } from '../string'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Slider from '@react-native-community/slider';

const Quest21View = ({ navigation }) => {
  const [inputAns, setInputAns] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [isWrongAns, setIsWrongAns] = useState(false)
  const [isHintFin, setIsHintFin] = useState(false)
  const [useHint, setUseHint] = useState(false)
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);

  return (
  <KeyboardAwareScrollView contentContainerStyle={{height:Dimensions.get('window').height+StatusBar.currentHeight, width:Dimensions.get("window").width}} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
    <ImageBackground source={require("../assets/background.jpg")} style={[styles.bgImage,{height:Dimensions.get('screen').height}]} >
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
          alignItems:'flex-end',
          justifyContent: 'flex-end',
          marginTop: 15,
          paddingLeft: 10,
        }}
      >
        <Text style={styles.basicText}>{STRING.date21}</Text>
        <Text style={styles.titleText}>{STRING.title21}</Text>
      </View>
      <Box option={'quest'} hintNum={'Mission 21.\n\n'} slider={true} text={STRING.quest21}/>
                  <View style={{flex:0.21,marginTop:-15}}>
                  <Text style={[styles.questText,{marginTop:'8%'}]}>딱' 총 {slider1}회</Text>
                  <Slider
                          	value={slider1}
                              onValueChange={(e) => setSlider1(e)}
                   	  		minimumValue={0}
                  	  		maximumValue={100}
                  	  		thumbTintColor="#6D4F3E"
                    	  		minimumTrackTintColor="#6D4F3E"
                    	  		maximumTrackTintColor="#6D4F3E"
                              step={1}
                  	  	/>
                  <Text style={[styles.questText,{marginTop:'8%'}]}>'똑' 총 {slider2}회</Text>
                  <Slider
                                      	value={slider2}
                                          onValueChange={(e) => setSlider2(e)}
                               	  		minimumValue={0}
                              	  		maximumValue={100}
                              	  		thumbTintColor="#6D4F3E"
                                	  		minimumTrackTintColor="#6D4F3E"
                                	  		maximumTrackTintColor="#6D4F3E"
                                          step={1}
                              	  	/>
                              	  	</View>
      <View
        style={{
          flex: 0.05,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button
          navigation={navigation}
          text={STRING.quest_buttonText}
          viewName={'ResultView'}
          inputAns={slider1+'-'+slider2}
          ans={STRING.ans21}
          setIsWrongAns={setIsWrongAns}
        />
      </View>
      <ModalWindow
        open={hintOpen}
        setOpen={setHintOpen}
        text={STRING.hint21_1}
        text2={STRING.hint21_2}
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

export default Quest21View
