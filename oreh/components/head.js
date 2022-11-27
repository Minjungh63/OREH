import { View } from 'react-native'
import { HintButton } from './hintButton.js'
import { ShortHint } from './shortHint.js'
import { TimerMenu } from './timer.js'

export const Header = ({
  setHintOpen,
  setIsHintFin,
  useHint,
  setUseHint,
  timerStart,
  hintBtnHide,
}) => {
  return (
    <View
      style={{
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop:10
      }}
    >
      <TimerMenu start={timerStart} />
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        {hintBtnHide || <ShortHint
          setHintOpen={setHintOpen}
          setIsHintFin={setIsHintFin}
          useHint={useHint}
          setUseHint={setUseHint}
        />}
        <HintButton />
      </View>
    </View>
  )
}
