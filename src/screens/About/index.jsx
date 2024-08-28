
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import styles from '../Home/styles';

import Title from '../../components/Title';


export default function Home() {
  const navigation = useNavigation();
  
  return (
<ScrollView>
    <View style={styles.container}>
      <Title title="Confira nossos filmes favoritos :)" />

      <View style={styles.card}>
        <Image style={styles.image} source={ source=require('../../../assets/filmefav.webp') }/>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Recomendação da Nick: Parasita</Text>
          <Text style={styles.cardDescription}>"Parasita" é um filme sul-coreano que explora a desigualdade social através da história de uma família pobre que se infiltra na vida de uma família rica. Com uma trama envolvente e cheia de reviravoltas, o filme aborda questões de classe, poder e sobrevivência. Aclamado pela crítica, venceu o Oscar de Melhor Filme em 2020.</Text>
        </View>
      </View>

      <View style={styles.card}>
      <Image style={styles.image} source={ source=require('../../../assets/modernfamily.jpg') }/>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Recomendação da Manu: Modern Family</Text>
          <Text style={styles.cardDescription}>"Modern Family" é uma série de comédia que acompanha uma família diversificada em suas dinâmicas do dia a dia. Com um estilo de falso documentário, aborda temas como casamento, paternidade e os desafios da vida moderna com humor leve.</Text>
        </View>
      </View>

      
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text style={styles.text}>Volte para a página sobre nós!</Text> 
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}
