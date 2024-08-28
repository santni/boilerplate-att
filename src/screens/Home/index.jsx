
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MyButton from '../../components/MyButton';
import Title from '../../components/Title';

import styles from '../Home/styles';

export default function Home() {
  const navigation = useNavigation();
  
  return (
<ScrollView>
    <View style={styles.container}>
      <Title title="Quem somos nós? :)" />

      <View style={styles.card}>
        <Image style={styles.image} source={ source=require('../../../assets/nick.jpg') }/>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Nick - Nicolly Santos</Text>
          <Text style={styles.cardDescription}>Oooi, tudo bem? Sou a Nicolly e tenho 17 anos. Sou estudante de Desenvolvimento de Sistemas no SENAI, onde estou aprendendo tudo sobre programação e tecnologia. Uma das coisas que mais gosto é explorar diferentes tipos de música e comida. Sou uma pessoa bem eclética, então estou sempre aberta a novas experiências e descobertas. Seja rock, samba, ou música clássica, e de sushi a comida italiana, eu estou sempre disposta a experimentar e aproveitar.</Text>
        </View>
      </View>

      <View style={styles.card}>
      <Image style={styles.image} source={ source=require('../../../assets/manu.jpg') }/>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Manu - Manuela Queiroz</Text>
          <Text style={styles.cardDescription}>Oieee, tudo bem? Sou Manuela Queiroz e gosto muito de ler e escutar música. A leitura me permite explorar novos mundos, enquanto a música me transporta para diferentes emoções e estados de espírito. Ambos os hobbies me ajudam a relaxar e a encontrar inspiração no cotidiano.</Text>
        </View>
      </View>

      <MyButton screen={'About'} name={'Descubra qual o nosso filme favorito!'} />
      <MyButton screen={'About2'} name={'Descubra o nosso hobbie favorito!'} />
    </View>
    </ScrollView>
  );
}