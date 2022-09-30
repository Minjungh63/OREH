import { StyleSheet } from 'react-native'
import { THEME } from '../theme'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',

    backgroundColor: THEME.backgroundColor,
    justifyContent: 'space-evenly',
  },
  questContainer: {
    flex: 1,
    padding: '8%',

    backgroundColor: THEME.quest_backgroundColor,
    justifyContent: 'space-evenly',
  },
  textBox: {
    backgroundColor: THEME.textColor,
    flex: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 30,
  },
  questBox: {
    backgroundColor: THEME.quest_boxColor,
    flex: 0.7,
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
  titleText: {
    fontFamily: THEME.basicFont,
    color: THEME.textColor,
    fontSize: 35,
    fontWeight: '700',
  },
  buttonText: {
    fontFamily: THEME.buttonFont,
    color: THEME.textColor,
    textAlign: 'center',
    fontSize: 21,
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
})
export default styles
