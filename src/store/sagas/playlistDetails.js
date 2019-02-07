/**
 * NOTA_ESTUDO:
 * O 'call' é utilizado para obter o resultado de 'promisses' de chamadas assíncronas à API.
 * O 'put' é usado para disparar uma actions e enviar informações para o reducer.
 */
import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErroActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    ); // Chamando a rota '/playlists'. Observe que o método get da api não é chamado mas passado para o call

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(
      ErroActions.setError("Não foi possível obter os detalhes da playlist")
    );
  }
}
