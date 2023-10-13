import { View, Text } from 'react-native'

interface PrimaryButtonProps {
  children: React.ReactNode
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}
