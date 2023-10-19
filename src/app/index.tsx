import { StyleSheet, View, ImageBackground } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import { StatusBar } from 'expo-status-bar'

import { StartGameScreen } from 'pages/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'

export const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />

      <LinearGradient
        // Background Linear Gradient
        colors={['#4e0329', '#ddb52f']}
        style={styles.appContainer}
      >
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/images/background.png')}
          style={styles.appContainer}
          imageStyle={styles.backgroundImage}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </Provider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
