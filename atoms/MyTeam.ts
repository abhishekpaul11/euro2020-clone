import { atom, selector } from "recoil";
import { Player, Positions } from "../types";

export const MyPlayersState = atom({
  key: 'MyPlayersState',
  default: [] as Player[]
})

export const MyFormationState = atom({
  key: 'MyFormationState',
  default: {
    FWD: 3,
    MID: 3,
    DEF: 4,
    GK: 1
  }
})

const positions = ['FWD', 'MID', 'DEF', 'GK'] as Positions[]

export const myPlayersPosition = selector({
  key: 'myPlayersPosition',
  get: ({ get }) => {
    const players = get(MyPlayersState)
    const groupedPlayers = {}
    const myFormation = get(MyFormationState)

    positions.forEach(position => {
      groupedPlayers[position] = players.filter((p) => p.position == position)
      //fill the additional positions with null values as per formation
      for(var i = groupedPlayers[position].length; i < myFormation[position]; i++){
        groupedPlayers[position].push(null)
      }
    });
    return groupedPlayers
  }
})
