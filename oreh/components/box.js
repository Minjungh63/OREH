import { ScrollView, Text, View, ImageBackground, Pressable, Image, Dimensions } from 'react-native'
import {useState} from 'react'
import styles from '../pages/styles.js'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../theme'
import { STRING } from '../string'

export const Box = ({hintNum, text, text2,img, img2, img3, img4, img5, option }) => {
  const [pressed, setPressed] = useState(1);
  return (
    <View style={option === 'quest' ? styles.questBox : styles.textBox}>
    <ImageBackground source={require("../assets/background.jpg")} style={styles.boxBgImage} >
    <View style={styles.questContainer}>
      {option === 'quest' ? (
        <View style={{justifyContent:'flex-start', height:"90%"}}>
            <Text style={[styles.questText,{marginTop:'8%'}]}>{hintNum}</Text>
            {img && (
            <>
            <Text style={{textAlign:'center',marginTop:'2%',fontSize:25, color:'rgba(0, 0, 0, 0.6)', fontWeight:'700'}}>ex</Text>
            <View style={{backgroundColor:'rgba(0, 0, 0, 0.6)',borderRadius:0,height:Dimensions.get('window').height*0.15, marginBottom:"8%", alignContent:'center', alignItems:'center'}}>
                <Image style={[styles.questImage,{height:Dimensions.get('window').height*0.1}]} source={img}/>
            </View>
            </>)}
            <Text style={styles.questText}>{text}</Text>
            {img3 && (<ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={{flexDirection:'row',marginTop:"5%", height:Dimensions.get('window').height*0.3, resizeMode:'contain'}}>
                <Image style={img ? styles.questImage: styles.questImage2} source={img2}/>
                <Image style={img ? styles.questImage: styles.questImage2} source={img3}/>
            </ScrollView>) || img3 || img2 && (
                <View style={img ? {flexDirection:'row', marginTop:"5%", height:Dimensions.get('window').height*0.15,alignContent:'center',alignItems:'center',justifyContent:'center'} : {flexDirection:'row',marginTop:"5%",height:Dimensions.get('window').height*0.3,resizeMode:'contain'}}>
                    <Image style={img ? styles.questImage: [styles.questImage2,{width:Dimensions.get('window').width*0.7}]} source={img2}/>
                </View>
            ) || img4 && (
                <View style={{marginTop:"5%",height:Dimensions.get('window').height*0.3, alignItems:'center'}}>
                    <Image style={[styles.questImage2,{width:Dimensions.get('window').width*0.4}]} source={img4}/>
                </View>
            ) || img5 && (
                <View style={{marginTop:"5%",height:Dimensions.get('window').height*0.3, alignItems:'center'}}>
                    <Image style={[styles.questImage2,{height:Dimensions.get('window').height*0.1,width:Dimensions.get('window').width*0.7}]} source={img5}/>
                </View>
            )}
        </View>
      ) : (
        <View>
        {pressed === 1 ? (
          <View style={{marginTop:'30%'}}>
            <Text style={styles.noticeText}>{text}</Text>
            <Text style={[styles.noticeText,{textAlign: 'left'}]}>{text2}</Text>
          </View>
          ):(
            <Text style={[styles.noticeText,{textAlign: 'left',fontFamily: THEME.titleFont, marginTop:'22%'}]}>{STRING.mission}</Text>
          )}
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
           {pressed === 2 ? (
           <Pressable style={{resizeMode:'contain'}} onPress={()=>setPressed(1)}>
             <Icon name="chevron-back-outline" size={35} color={THEME.buttonColor} />
          </Pressable>):<View></View>}
          <Pressable style={{resizeMode:'contain'}} onPress={()=>setPressed(2)}>
            <Icon name="chevron-forward-outline" size={35} color={THEME.buttonColor} />
          </Pressable>
          </View>
        </View>
      )}
      </View>
      </ImageBackground>
    </View>
  )
}
