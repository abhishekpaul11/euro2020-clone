import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { PlayerItem } from "../types";

interface Props {
  player: PlayerItem
}

const PlayerListItem = ({ player }: Props) => {
  return (
    <View style = {styles.container}>
      <Image source = {{uri: `https://media.api-sports.io/football/players/${player.id}.png`}}
             style = {styles.image} />

      <View style = {{flexGrow: 1}}>
        <Text  style = {[styles.name,{maxWidth: 180}]} numberOfLines={1} ellipsizeMode={'tail'}>{player.name}</Text>
        <Text>{player.match}</Text>
      </View>

      <View style = {styles.price}>
        <Text  style = {styles.name}>{'\u20ac'+(player.price/1000000).toFixed(1)}m</Text>
        <Text>{player.position}</Text>
      </View>

      <Text style = {styles.points}>{player.totalPoints}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#eee'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
  points: {
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 10
  },
  image: {
    height: 60,
    width: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 40,
    marginRight: 10
  },
  price: {
    marginHorizontal: 10,
    alignItems: 'flex-end'
  }
})

export default PlayerListItem
