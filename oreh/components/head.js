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
}) => {
  return (
    <View
      style={{
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TimerMenu start={timerStart} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ShortHint
          setHintOpen={setHintOpen}
          setIsHintFin={setIsHintFin}
          useHint={useHint}
          setUseHint={setUseHint}
        />
        <HintButton />
      </View>
    </View>
  )
}
