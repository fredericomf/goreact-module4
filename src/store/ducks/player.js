import Sound from "react-sound";

// NOTA_ESTUDO: Lembrar que um DUCK deve ser registrado no CombineReducers (index.js)

export const Types = {
  LOAD: "player/LOAD",
  PLAY: "player/PLAY",
  PAUSE: "player/PAUSE",
  NEXT: "player/NEXT",
  PREV: "player/PREV"
};

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING
};

// REDUCER:
export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        list: action.payload.list,
        status: Sound.status.PLAYING
      };
    case Types.PLAY:
      return {
        ...state,
        status: Sound.status.PLAYING
      };
    case Types.PAUSE:
      return {
        ...state,
        status: Sound.status.PAUSED
      };
    case Types.PREV: {
      // NOTA_ESTUDO: Exemplo de passagem da 'list': pages/playlist/index.js -> <SongItem>

      // Pego o índice da música atual
      const currentIndex = state.list.findIndex(
        song => song.id === state.currentSong.id
      );

      // A música anterior
      const prev = state.list[currentIndex - 1];

      // Só altero a música atual se existe alguma anterior
      if (prev) {
        return { ...state, currentSong: prev, status: Sound.status.PLAYING };
      }

      return state;
    }
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(
        song => song.id === state.currentSong.id
      );
      const next = state.list[currentIndex + 1];

      if (next) {
        return { ...state, currentSong: next, status: Sound.status.PLAYING };
      }

      return state;
    }
    default:
      return state;
  }
}

// ACTION CREATORS:
export const Creators = {
  loadSong: (song, list) => ({ type: Types.LOAD, payload: { song, list } }),
  play: song => ({ type: Types.PLAY }),
  pause: song => ({ type: Types.PAUSE }),
  prev: song => ({ type: Types.PREV }),
  next: song => ({ type: Types.NEXT })
};
