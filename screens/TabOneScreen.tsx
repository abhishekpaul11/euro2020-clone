import * as React from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text } from 'react-native';
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";

export default function TabOneScreen() {

  const viewPlayers = () => {
    console.warn('Hey')
  }

  return (
    <SafeAreaView style={styles.container}>

      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style = {styles.button}>
        <Text style={{fontWeight: 'bold'}}>View Players</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4ccf4d'
  },
  button: {
    backgroundColor: 'orange',
    width: '90%',
    marginTop: 'auto',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50
  }
});
