// screens/PageTwo.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function PageTwo({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'euhab.png' }} style={styles.profileImage} />
        <Text style={styles.sectionTitle}>Habilidades:</Text>
        <Text style={styles.sectionText}>
          Participação em projetos acadêmicos interdisciplinares, como a criação de um podcast e um e-book sobre o bioma da caatinga e na criação da identidade visual de um projeto que visa melhorar a qualidade de vida dos cães e gatos do Recife.
          {'\n'}Idiomas: Inglês Avançado, Espanhol Intermediário
        </Text>
        <Text style={styles.sectionTitle}>Programação:</Text>
        <Text style={styles.sectionText}>
          Conhecimento em programação básico em HTML, CSS, JavaScript, SQL, Dart e C.
        </Text>
        <Text style={styles.sectionTitle}>SoftSkills:</Text>
        <Text style={styles.sectionText}>
          Criatividade para desenvolver soluções inovadoras e atrativas para diferentes tipos de projetos.
          {'\n'}Proatividade para identificar problemas e propor melhorias em processos e produtos.
        </Text>
        <Text style={styles.sectionTitle}>Design Gráfico:</Text>
        <Text style={styles.sectionText}>
          Um ano e meio de experiência em design, trabalhando em projetos gráficos para clientes de diferentes segmentos, tais como logotipos, banners, cartões de visita, folders e redes sociais.
        </Text>
        <Text style={styles.sectionTitle}>Ferramentas que utilizo:</Text>
        <Text style={styles.sectionText}>
          Possuo conhecimento em ferramentas de design gráfico, tais como Adobe Photoshop, Illustrator e CorelDRAW. Também nas ferramentas VS code e SPARK META studio.
        </Text>
        <Text style={styles.sectionTitle}>Considerações Finais:</Text>
        <Text style={styles.sectionText}>
          Como graduanda em duas áreas, possuo uma visão ampla e integrada das necessidades dos projetos em que trabalho. Tenho habilidades para atuar em diferentes etapas de um projeto, desde a criação até a implementação, combinando criatividade e tecnologia para alcançar resultados de qualidade. Agradeço a oportunidade de apresentar minha candidatura e estou à disposição para maiores informações.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Text style={styles.backText}>voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#171718' },
  profileContainer: { alignItems: 'center', padding: 20 },
  profileImage: { width: 300, height: 300, borderRadius: 150, alignSelf: 'center', marginVertical: 20 },
  sectionTitle: { fontSize: 24, fontWeight: '400', color: 'white', marginBottom: 10 },
  sectionText: { fontSize: 16, fontWeight: '400', color: '#c0b9b9', marginBottom: 20 },
  backButton: { backgroundColor: '#f42c5b', padding: 10, borderRadius: 5, marginVertical: 20, alignSelf: 'center' },
  backText: { color: 'white', fontSize: 16, fontWeight: '500' },
});
