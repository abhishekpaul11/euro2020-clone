import React from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import PlayerListItem from "../components/PlayerListItem";
import { useRecoilState } from "recoil";
import { filteredPlayers } from "../atoms/Players";

const PlayersList = () => {
  const [players] = useRecoilState(filteredPlayers)

  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({item}) => (<PlayerListItem player={item}/>)}
    />
  )
}

export default PlayersList
