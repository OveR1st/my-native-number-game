import { StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import { StatusBar } from 'expo-status-bar'

import { StartGameScreen } from 'pages/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'

export const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#4e0329', '#ddb52f']}
        >
          <StartGameScreen />
        </LinearGradient>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#ddb52f',
    flex: 1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
  },
})
