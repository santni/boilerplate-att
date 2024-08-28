import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";
import MyButton from '../../components/MyButton';
import Title from '../../components/Title'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Home Screen</Text>  */}
      <Title title="Home" />
     <MyButton screen={'About'} name={'Go to Nically page'} />
     <MyButton screen={'Ghibli'} name={'Go to Ghibli page'} />

      {/* <TouchableOpacity onPress={() => navigation.navigate("Ghibli")}>
      <Text style={styles.text}>Go to Nicolly page</Text> 
      </TouchableOpacity> */}
    </View>
  );
}



