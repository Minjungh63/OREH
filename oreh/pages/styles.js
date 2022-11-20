import { StyleSheet, Platform, Dimensions } from 'react-native'
import { THEME } from '../theme'
const styles = StyleSheet.create({
  container: {
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    padding: '6%',
    justifyContent: 'space-evenly',
  },
  questContainer: {
    height:Dimensions.get('window').height*0.7,
    padding: '8%',
    justifyContent: 'space-evenly',
  },
  textBox: {
    flex:0.8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  questBox: {
    flex:0.65,
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight:6,
    paddingBottom:6,
    borderRadius: 30,
    backgroundColor:'rgba(0, 0, 0, 0.0000001)',
    justifyContent: 'center',
         ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: {
                	width: 0,
                	height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
              },
              android: {
                elevation:3
              },
            }),
  },
  inputBox: {
    backgroundColor: 'white',
    color:THEME.buttonColor,
    fontSize: 21,
    borderRadius: 10,
    height: 40,
    fontFamily: THEME.buttonFont,
    width: '60%',
    paddingLeft: 10,
  },
  buttonBox: {
    backgroundColor: THEME.buttonColor,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 40,
    borderRadius: 10,
  },
  hintModalBox: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '85%',
    height: 280,
    borderRadius: 20,
  },
  hintModalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  wrongAnsModalBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '85%',
    height: 200,
    borderRadius: 20,
  },
  PressedButtonBox: {
    backgroundColor: THEME.buttonPressColor,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 40,
    borderRadius: 10,
  },
  titleNoticeText: {
    fontFamily: THEME.titleFont,
    color: THEME.lightBeige,
    fontSize: 35,
  },
  buttonText: {
    fontFamily: THEME.buttonFont,
    color: THEME.lightBeige,
    textAlign: 'center',
    fontSize: 21,
  },
  hintCountText: {
    fontFamily: THEME.titleFont,
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  questText: {
    fontFamily: THEME.basicFont,
    color: THEME.textColor,
    textAlign: 'center',
    fontSize: 19,
  },
  noticeText: {
    fontFamily: THEME.basicFont,
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
  },
  basicText: {
    fontFamily: THEME.basicFont,
    color: THEME.textColor,
    fontSize: 15,
  },
  modalText: {
    fontFamily: THEME.basicFont,
    color: 'white',
    fontSize: 20,
    textAlign:'center',
  },
  hintText: {
    fontFamily: THEME.basicFont,
    color: THEME.textColor,
    fontSize: 20,
    textAlign:'center',
  },
  timerText: {
    fontFamily: THEME.basicFont,
    color: THEME.textColor,
    fontSize: 20,
  },
  bgImage:{
    width:'100%',
    height:'100%',
  },
  boxBgImage:{
    width:'100%',
    height:'100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  questImage:{
      width:'100%',
      height:'100%',
      borderRadius: 10,
      resizeMode:'contain'
    }
})
export default styles
