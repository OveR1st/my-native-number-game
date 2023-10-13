import { Text, TextInput, View } from 'react-native'
import { PrimaryButton } from 'shared/PrimaryButton'

export const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}
