import Modal from 'react-native-simple-modal'
import styles from '../pages/styles'
import { Text } from 'react-native'

export const ModalWindow = ({ open, setOpen, text, isHint }) => {
  return (
    <Modal
      open={open}
      modalDidClose={() => setOpen(!open)}
      closeOnTouchOutside={true}
      disableOnBackPress={true}
      overlayStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flex: 1,
      }}
      modalStyle={isHint ? styles.hintModalBox : styles.wrongAnsModalBox}
    >
      <Text style={isHint ? styles.hintText : styles.modalText}>{text}</Text>
    </Modal>
  )
}
