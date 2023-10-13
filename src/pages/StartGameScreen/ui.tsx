import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Input } from 'shared/Input'
import { PrimaryButton } from 'shared/PrimaryButton'

export const StartGameScreen = () => {
  return (
    //TODO need to feature/widgets ?
    <View style={styles.inputContainer}>
      <Input />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#72063c',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
