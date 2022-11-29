LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
import React, { useState, useContext } from 'react'
import { View, Text, LogBox, SafeAreaView, ImageBackground, Dimensions, Image,StatusBar,Pressable,Linking  } from 'react-native'
import styles from './styles'
import { Button } from '../components/button'
import { Box } from '../components/box'
import { Input } from '../components/Input'
import { ModalWindow } from '../components/modal'
import { Header } from '../components/head'
import { STRING } from '../string'
import {THEME} from '../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserContext from '../service/UserContext';
import timeFormat from '../service/timeFormat.js'

const LastView = ({ navigation }) => {
  const [inputAns, setInputAns] = useState('')
  const [hintOpen, setHintOpen] = useState(false)
  const [isWrongAns, setIsWrongAns] = useState(false)
  const [isHintFin, setIsHintFin] = useState(false)
  const [useHint, setUseHint] = useState(false)
  const userContext = useContext(UserContext)
  const goInstagram=()=>{
    Linking.openURL('https://instagram.com/oreh__oreh?igshid=YmMyMTA2M2Y=')
  }
  const goMoreWebtoon=()=>{
    Linking.openURL('https://link-page.kakao.com/goto_view?series_id=57569907')
  }
  const contact=()=>{
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSe1sk7zsxqYLPbpZh3Ma1xl1RieeRGybb5YGpVxPSHbKe8qNQ/viewform?usp=sf_link')
  }
  return (
  <KeyboardAwareScrollView contentContainerStyle={{height:Dimensions.get('window').height+StatusBar.currentHeight, width:Dimensions.get("window").width}} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
    <ImageBackground source={require("../assets/background.jpg")} style={[styles.bgImage,{height:Dimensions.get('screen').height}]} >
    <View style={styles.container}>
      <View style={{ alignItems: 'center',justifyContent:'flex-end',height:30,marginBottom:-Dimensions.get('window').height*0.08}}>
                <Text style={{fontFamily:THEME.titleFont, color: THEME.buttonColor, fontSize: 17}}>경성일기 : 1919</Text>
              </View>
      <View
        style={{
          flex: 0.1,
          alignItems:'flex-end',
          justifyContent: 'flex-end',
          marginTop: 15,
          paddingLeft: 10,
        }}
      >
      </View>
      <Box option={'quest'} webtoon={true}/>
      <View
              style={{
                flex: 0.05,
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
            <Pressable
              style={styles.smallButtonBox}
              onPress={goInstagram}
            >
              <Text style={styles.smallButtonText}>SNS</Text>
            </Pressable>
            <Pressable
              style={styles.smallButtonBox}
              onPress={goMoreWebtoon}
            >
              <Text style={styles.smallButtonText}>웹툰 더보기</Text>
            </Pressable>
            <Pressable
              style={styles.smallButtonBox}
              onPress={contact}
            >
              <Text style={styles.smallButtonText}>의견!</Text>
            </Pressable>
      </View>
      </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default LastView
