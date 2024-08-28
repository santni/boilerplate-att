import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";
import MyButton from '../../components/MyButton';
import Title from '../../components/Title'

export default function Ghibli() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Home Screen</Text>  */}
      <Title title="Ghibli" />

     <MyButton screen={'Home'} name={'Go to Home page'} />
     <MyButton screen={'About'} name={'Go to Nically page'} />


      {/* <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <Text style={styles.text}>Go to Nicolly page</Text> 
      </TouchableOpacity> */}
    </View>
  );
}



