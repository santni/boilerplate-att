import { View, Text } from 'react-native'

import styles from '../Title/styles';
 
const FirstText = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default FirstText;