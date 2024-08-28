import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function About() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Nicolly Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text>Back to Home page</Text> 
      </TouchableOpacity>
    </View>
  )
}