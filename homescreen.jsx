// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.name}>HELOYSA MACHADO</Text>
        <Text style={styles.role}>Desenvolvedora & Designer</Text>
        <Text style={styles.objective}>
          Objetivo:
          {'\n'}Busco uma oportunidade de crescimento profissional no mercado de Design e tecnologia da informação, onde meus conhecimentos e habilidades possam ser aplicados para contribuir com o sucesso da empresa.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://br.linkedin.com/in/maria-heloysa-da-silva-machado-aa253a271')} style={styles.linkedinButton}>
          <Text style={styles.linkedinText}>meu linkedIn</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: 'eueu.png' }} style={styles.profileImage} />
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>Sobre mim:</Text>
        <Text style={styles.aboutText}>
          FORMAÇÃO PROFISSIONAL:
          {'\n'}Graduação em Design Gráfico no Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco (IFPE). (2023-2025)
          {'\n'}Graduação em Análise e Desenvolvimento de Sistemas no Serviço Nacional de Aprendizagem Comercial (SENAC). (2023-2025)
          {'\n'}Habilidades:
          {'\n'}Criatividade para desenvolver soluções inovadoras e atrativas para diferentes tipos de projetos.
          {'\n'}Proatividade para identificar problemas e ....
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('PageTwo')} style={styles.moreButton}>
          <Text style={styles.moreText}>Mais sobre mim</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#171718' },
  profileContainer: { alignItems: 'center', padding: 20 },
  name: { fontSize: 34, fontWeight: '800', color: 'rgba(244, 44, 91, 1)', textAlign: 'center' },
  role: { fontSize: 20, fontWeight: '400', color: 'white', textAlign: 'center', marginVertical: 10 },
  objective: { fontSize: 16, fontWeight: '400', color: 'white', textAlign: 'center', marginVertical: 20 },
  linkedinButton: { backgroundColor: '#f42c5b', padding: 10, borderRadius: 5, marginVertical: 20 },
  linkedinText: { color: 'white', fontSize: 16, fontWeight: '500' },
  profileImage: { width: 300, height: 300, borderRadius: 150, alignSelf: 'center', marginVertical: 20 },
  aboutContainer: { padding: 20 },
  aboutTitle: { fontSize: 24, fontWeight: '400', color: 'white', marginBottom: 10 },
  aboutText: { fontSize: 16, fontWeight: '400', color: '#c0b9b9' },
  moreButton: { backgroundColor: '#f42c5b', padding: 10, borderRadius: 5, marginVertical: 20, alignSelf: 'center' },
  moreText: { color: 'white', fontSize: 16, fontWeight: '500' },
});
