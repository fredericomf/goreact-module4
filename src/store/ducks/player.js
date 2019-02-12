import Sound from "react-sound";

// NOTA_ESTUDO: Lembrar que um DUCK deve ser registrado no CombineReducers (index.js)

export const Types = {
  LOAD: "player/LOAD"
};

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING
};

// REDUCER:
export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        status: Sound.status.PLAYING
      };
    default:
      return state;
  }
}

// ACTION CREATORS:
export const Creators = {
  loadSong: song => ({ type: Types.LOAD, payload: { song } })
};
