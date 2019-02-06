/**
 * NOTA_ESTUDO:
 * O 'call' é utilizado para obter o resultado de 'promisses' de chamadas assíncronas à API.
 * O 'put' é usado para disparar uma actions e enviar informações para o reducer.
 */
import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistsActions } from "../ducks/playlists";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists"); // Chamando a rota '/playlists'. Observe que o método get da api não é chamado mas passado para o call

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    console.log("ERRO AO CHAMAR API: " + err);
  }
}
