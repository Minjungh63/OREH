import { StyleSheet } from 'react-native'
import { THEME } from '../theme'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '6%',
    justifyContent: 'space-evenly',
  },
  questContainer: {
    flex: 1,
    padding: '8%',
    backgroundColor: THEME.quest_backgroundColor,
    justifyContent: 'space-evenly',
  },
  textBox: {
    flex: 0.8,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  questBox: {
    flex: 0.8,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputBox: {
    backgroundColor: THEME.textColor,
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
    backgroundColor: '#ffffff',
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
    color: THEME.textColor,
    textAlign: 'center',
    fontSize: 21,
  },
  hintCountText: {
    fontFamily: THEME.basicFont,
    color: 'yellow',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  questText: {
    fontFamily: THEME.basicFont,
    color: THEME.quest_textColor,
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
    color: THEME.textColor,
    fontSize: 20,
  },
  hintText: {
    fontFamily: THEME.basicFont,
    color: 'black',
    fontSize: 20,
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
  }
})
export default styles
