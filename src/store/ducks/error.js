// NOTA_ESTUDO: Lembrar que um DUCK deve ser registrado no CombineReducers (index.js)

export const Types = {
  SET: "error/SET",
  HIDE: "error/HIDE"
};

const INITIAL_STATE = {
  visible: false,
  message: null
};

// REDUCER:
export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

// ACTION CREATORS:
export const Creators = {
  setError: message => ({ type: Types.SET, payload: { message } }),

  hideError: () => ({
    type: Types.HIDE
  })
};

/**
 * NOTA_ESTUDO: Relembrando o fluxo:
 *
 * 1. O Componente chama o GET_REQUEST.
 * 2. O GET_REQUEST chama o SAGA.
 * 3. O SAGA, assim que finalizar, vai chamar o getPlaylistsSuccess, repassando os dados obtidos da API para o nosso reducer.
 *
 *
 */
