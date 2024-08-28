import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <Text>Go to Nicolly page</Text> 
      </TouchableOpacity>
    </View>
  );
}