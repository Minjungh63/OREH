import Modal from 'react-native-simple-modal'
import styles from '../pages/styles'
import { Text, Pressable, Image } from 'react-native'
import {THEME} from '../theme'
import {Button} from './button'
import { View } from 'react-native'
import {useState} from 'react'
import {STRING} from '../string'

export const ModalWindow = ({ open, setOpen, text, text2,img, isHint,isPop }) => {
  const [pressed, setPressed] = useState(false)
  const [hintNum, setHintNum] = useState(1)
  return (
    <Modal
      open={open}
      modalDidClose={() => setOpen(!open)}
      closeOnTouchOutside={true}
      disableOnBackPress={true}
      overlayStyle={
        isHint || isPop
          ? styles.hintModalBackground
          : {
              backgroundColor: 'rgba(0, 0, 0, 0)',
              flex: 1,
            }
      }
      modalStyle={isHint && styles.hintModalBox || isPop && styles.popModalBox || styles.wrongAnsModalBox}
    >
    <View style={isPop ? {flex:1,width:'100%',justifyContent:'center', marginVertical:30} :{flex:1,width:'100%',justifyContent:'space-between', marginVertical:30}}>
      {hintNum ==1 ?
        <>
            <Text style={isHint && styles.hintText || isPop && styles.popText || styles.modalText}>{text}</Text>
            {img && (<Image style={styles.hintImage} source={img}/>)}
        </>
      : <Text style={isHint ? styles.hintText : styles.modalText}>{text2}</Text>}
        {isHint&&<Pressable
            style={[
              pressed ? styles.PressedButtonBox : styles.buttonBox,
              { width: '70%' },
            ]}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={()=>hintNum==1 ? setHintNum(2): setHintNum(1)}
          >
            {hintNum==1 ? <Text style={[styles.buttonText,{fontSize:15}]}>다음 힌트 보기</Text>
            : <Text style={[styles.buttonText,{fontSize:15}]}>이전 힌트 보기</Text>}
          </Pressable>}
      </View>
    </Modal>
  )
}
