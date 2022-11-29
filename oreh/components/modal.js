import Modal from 'react-native-simple-modal'
import styles from '../pages/styles'
import { Text, Pressable, Image, Dimensions } from 'react-native'
import {THEME} from '../theme'
import {Button} from './button'
import { View } from 'react-native'
import {useState} from 'react'
import {STRING} from '../string'

export const ModalWindow = ({ open, setOpen, text, text2,img,img2, img3,img5,isHint,isPop }) => {
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
        {img5 ?
            <View style={{flex:1,width:'100%',justifyContent:'flex-start'}}>
                <Text style={isHint && styles.hintText || isPop && styles.popText || styles.modalText}>{"HINT1\n\n"}</Text>
                <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center'}}>
                    <Image style={[styles.hintImage,{width:50, height:50}]} source={img5}/>
                    {text && <Text style={isHint && styles.hintText || isPop && styles.popText || styles.modalText}>{text}</Text>}
                </View>
            </View>
        :
            <>
                {text && <Text style={isHint && styles.hintText || isPop && styles.popText || styles.modalText}>{text}</Text>}
                {isPop && <Text style={[styles.popText,{fontSize:15, marginTop:15}]}>{'해당 글자를 미션지에 기입하여,\n‘최종 비밀 지령’을 맞추시오.'}</Text>}
                {img && <Image style={styles.hintImage} source={img}/>}
                {img3 && <Image style={[styles.hintImage,{height:Dimensions.get('window').height*0.1}]} source={img3}/>}
            </>
         }
         </>
      : <>
            {text2 && <Text style={isHint ? styles.hintText : styles.modalText}>{text2}</Text>}
            {img2 && (<Image style={styles.hintImage} source={img2}/>)}
        </>
      }
        {isHint&&<Pressable
            style={[
              pressed ? styles.PressedButtonBox : styles.buttonBox,
              { width: '70%' },
            ]}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={()=>hintNum==1 ? setHintNum(2): setHintNum(1)}
          >
            {hintNum==1 ? <Text style={[styles.buttonText,{fontSize:15}]}>다음 힌트를 보시겠습니까?</Text>
            : <Text style={[styles.buttonText,{fontSize:15}]}>이전 힌트 보기</Text>}
          </Pressable>}
      </View>
    </Modal>
  )
}
