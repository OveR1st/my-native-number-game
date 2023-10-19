import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native'

interface PrimaryButtonProps {
  pressHandler: (e: GestureResponderEvent) => void
  children: React.ReactNode
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  pressHandler,
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
})
