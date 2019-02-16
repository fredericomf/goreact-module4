import Sound from "react-sound";

// NOTA_ESTUDO: Lembrar que um DUCK deve ser registrado no CombineReducers (index.js)

export const Types = {
  LOAD: "player/LOAD",
  PLAY: "player/PLAY",
  PAUSE: "player/PAUSE",
  NEXT: "player/NEXT",
  PREV: "player/PREV",
  PLAYING: "player/PLAYING",
  HANDLE_POSITION: "player/HANDLE_POSITION",
  SET_POSITION: "player/SET_POSITION",
  SET_VOLUME: "player/SET_VOLUME"
};

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  positionShown: null,
  duration: null,
  volume: 100
};

// REDUCER:
export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        list: action.payload.list,
        status: Sound.status.PLAYING,
        position: 0
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
        return {
          ...state,
          currentSong: prev,
          status: Sound.status.PLAYING,
          position: 0
        };
      }

      return state;
    }
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(
        song => song.id === state.currentSong.id
      );
      const next = state.list[currentIndex + 1];

      if (next) {
        return {
          ...state,
          currentSong: next,
          status: Sound.status.PLAYING,
          position: 0
        };
      }

      return state;
    }
    case Types.PLAYING:
      return { ...state, ...action.payload }; // NOTA_ESTUDO: '...' informa que queremos incluir todo o conteúdo da variável a frente: '...action.payload' = '{position, duration}'

    case Types.HANDLE_POSITION:
      return {
        ...state,
        positionShown: state.duration * action.payload.percent
      };
    case Types.SET_POSITION:
      return {
        ...state,
        position: state.duration * action.payload.percent,
        positionShown: null
      };
    case Types.SET_VOLUME:
      return {
        ...state,
        volume: action.payload.volume
      };
    default:
      return state;
  }
}

// ACTION CREATORS:
export const Creators = {
  loadSong: (song, list) => ({ type: Types.LOAD, payload: { song, list } }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
  prev: () => ({ type: Types.PREV }),
  next: () => ({ type: Types.NEXT }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration }
  }),

  handlePosition: percent => ({
    type: Types.HANDLE_POSITION,
    payload: { percent }
  }),

  setPosition: percent => ({
    type: Types.SET_POSITION,
    payload: { percent }
  }),

  setVolume: volume => ({
    type: Types.SET_VOLUME,
    payload: { volume }
  })
};
