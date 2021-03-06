import { atom, selector } from "recoil";

export const fetchApi = async(index) => {
    try{
      const response = await fetch("https://v3.football.api-sports.io/players?league=4&season=2020&page="+index, {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      		"x-apisports-key": "4d678bc5621aa13d69b4556ff0786a38"
      	}
      })

      const json = await response.json()
      return json.response.map((entry) => ({
        id: entry.player.id,
        name: entry.player.name,
        match: 'ABC v DEF',
        price: '10000000',
        position: posFix[entry.statistics[0].games.position],
        totalPoints: 29,
        currentPage: json.paging.current,
        totalPages: json.paging.total
      }))
    }
    catch (e){
        console.log(e)
        return []
    }
}

const posFix = {
  Attacker: 'FWD',
  Defender: 'DEF',
  Midfielder: 'MID',
  Goalkeeper: 'GK'
}

export const allPlayersState = atom({
  key: 'allPlayersState',
  default: fetchApi(1)
})

export const positionFilterState = atom({
  key: 'positionFilterState',
  default: [] as String[]
})

export const filteredPlayers = selector({
  key: 'filteredPlayers',
  get: ({ get }) => {
    const players = get(allPlayersState)
    console.log(typeof(players))
    const filters = get(positionFilterState)
    return players.filter(player => filters.length == 0 || filters.includes(player.position))
  }
})
