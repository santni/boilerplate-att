import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from '../MyButton/styles';

const MyButton = ({screen, name}) => {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <Text >{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;