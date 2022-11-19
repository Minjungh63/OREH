import { ScrollView, Text, View, ImageBackground, Pressable } from 'react-native'
import {useState} from 'react'
import styles from '../pages/styles.js'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../theme'
import { STRING } from '../string'

export const Box = ({ text, text2, option }) => {
  const [pressed, setPressed] = useState(1);
  return (
    <View style={option === 'quest' ? styles.questBox : styles.textBox}>
    <ImageBackground source={require("../assets/background.jpg")} style={styles.boxBgImage} >
    <View style={styles.container}>
      {option === 'quest' ? (
        <Text style={styles.questText}>{text}</Text>
      ) : (
        <View>
        {pressed === 1 ? (
          <View>
            <Text style={styles.noticeText}>{text}</Text>
            <Text style={[styles.noticeText,{textAlign: 'left'}]}>{text2}</Text>
          </View>
          ):(
            <Text style={[styles.noticeText,{textAlign: 'left',fontFamily: THEME.titleFont}]}>{STRING.mission}</Text>
          )}
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
           {pressed === 2 ? (
           <Pressable style={{}} onPress={()=>setPressed(1)}>
             <Icon name="chevron-back-outline" size={35} color={THEME.buttonColor} />
          </Pressable>):<View></View>}
          <Pressable style={{}} onPress={()=>setPressed(2)}>
            <Icon name="chevron-forward-outline" size={3ci5} color={THEME.buttonColor} />
          </Pressable>
          </View>
        </View>
      )}

      </View>
      </ImageBackground>
    </View>
  )
}
