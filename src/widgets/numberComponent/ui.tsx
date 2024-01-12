import { GestureResponderEvent, StyleSheet, View } from 'react-native'
import { Input } from 'shared/Input'
import { PrimaryButton } from 'shared/PrimaryButton'

export const NumberComponent = () => {
  function pressHandler(e: GestureResponderEvent) {
    console.log('Pressed', e.target)
  }

  return (
    <>
      <Input
        style={styles.numberInput}
        maxLength={2}
        keyboardType={'number-pad'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressHandler={pressHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressHandler={pressHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
