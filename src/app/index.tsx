import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import { StatusBar } from 'expo-status-bar'

import { StartGameScreen } from 'pages/StartGameScreen'

export const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <StartGameScreen />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
  },
})
