import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text, View } from 'react-native';
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import PlayerListItem from "../components/PlayerListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { players } from "../assets/data/players";

export default function TabOneScreen() {

  const playersBottomSheet = useRef<BottomSheet>(null)

  const viewPlayers = () => {
    playersBottomSheet.current.snapToIndex(0)
  }

  const snapPoints = ['50%','80%']

  return (
    <SafeAreaView style={styles.container}>

      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style = {styles.button}>
        <Text style={{fontWeight: 'bold'}}>View Players</Text>
      </Pressable>

      <BottomSheet
        ref={playersBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <BottomSheetFlatList
          data={players}
          renderItem={({item}) => (<PlayerListItem player={item}/>)}
        />
      </BottomSheet>

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
