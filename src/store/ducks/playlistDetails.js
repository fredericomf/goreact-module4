// NOTA_ESTUDO: Lembrar que um DUCK deve ser registrado no CombineReducers (index.js)

// NOTA_ESTUDO: Aqui serão implementadas nossas Types, Reducer e ActionCreators das nossas playlistDetails.

export const Types = {
  GET_REQUEST: "playlistDetails/GET_REQUEST",
  GET_SUCCESS: "playlistDetails/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: {},
  loading: false
};

// REDUCER:
export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

// ACTION CREATORS:
export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),

  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};

/**
 * NOTA_ESTUDO: Relembrando o fluxo:
 *
 * 1. O Componente chama o GET_REQUEST.
 * 2. O GET_REQUEST chama o SAGA.
 * 3. O SAGA, assim que finalizar, vai chamar o getPlaylistDetailsSuccess, repassando os dados obtidos da API para o nosso reducer.
 *
 *
 */
