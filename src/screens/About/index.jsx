import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './style';

export default function About() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nicolly Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text style={styles.text}>Back to Home page</Text> 
      </TouchableOpacity>
    </View>
  )
}