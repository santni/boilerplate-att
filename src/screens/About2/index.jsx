
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import styles from '../Home/styles';

import Title from '../../components/Title';


export default function About2() {
  const navigation = useNavigation();
  
  return (
<ScrollView>
    <View style={styles.container}>
      <Title title="Confira nosso hobbie favorito :)" />

      <View style={styles.card}>
        <Image style={styles.image} source={ source=require('../../../assets/danca.webp') }/>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Nick: Dança do ventre</Text>
          <Text style={styles.cardDescription}>"
          A dança do ventre é uma dança tradicional do Oriente Médio, com movimentos suaves de quadris e tronco. Ela simboliza feminilidade e força, sendo praticada como arte e para o bem-estar.</Text>
        </View>
      </View>

      <View style={styles.card}>
      <Image style={styles.image} source={ source=require('../../../assets/livrohobbie.jpg') }/>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Manu: Leitura</Text>
          <Text style={styles.cardDescription}>
          A leitura é um hobby que proporciona conhecimento, entretenimento e reflexão. Ela permite viajar por diferentes mundos e perspectivas sem sair do lugar, estimulando a imaginação e o pensamento crítico. Além disso, promove relaxamento e melhora a concentração.</Text>
        </View>
      </View>

      
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Text style={styles.text}>Volte para a página sobre nós!</Text> 
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}
