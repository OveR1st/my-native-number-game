import { StyleSheet, View } from 'react-native'
import { NumberComponent } from 'widgets/numberComponent'

export const StartGameScreen = () => {
  return (
    //TODO need to feature/widgets ?
    <View style={styles.inputContainer}>
      <NumberComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b021f',
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
