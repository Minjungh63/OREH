import { StyleSheet } from 'react-native'
import { THEME } from '../theme'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',
    paddingTop: '15%',
    backgroundColor: THEME.backgroundColor,
    justifyContent: 'space-evenly',
  },
  questContainer: {
    flex: 1,
    padding: '8%',
    paddingVertical: '20%',
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
    flex: 0.6,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 30,
    justifyContent: 'center',
  },
  buttonBox: {
    backgroundColor: THEME.buttonColor,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 40,
    borderRadius: 10,
  },
  titleText: {
    fontFamily: THEME.basicFont,
    color: THEME.textColor,
    fontSize: 30,
    fontWeight: '700',
  },
  buttonText: {
    fontFamily: THEME.buttonFont,
    color: THEME.textColor,
    textAlign: 'center',
    fontSize: 19,
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
})
export default styles
