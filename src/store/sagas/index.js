import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistTypes } from "../ducks/playlists";

import { getPlaylists } from "./playlists";

export default function* rootSaga() {
  /**
   * NOTA_ESTUDO:
   * O takeLatest pode ser visto e entendido em prática:
   * 1. Componente Sidebar faz uma chamada aqui.
   * 2. pages/browse/index.js faz, também, uma chamada aqui.
   * 3. As chamadas ocorrem, praticamente, ao mesmo tempo.
   * 4. Uma das requisições será cancelada e o SAGA retornará aos dois o resultado da que ficou ativa.
   *
   * Com isso temos ganho performático e não precisamos nos preocupar em chamar "N" vezes a mesma request pelo SAGA.
   */

  yield all([takeLatest(PlaylistTypes.GET_REQUEST, getPlaylists)]);
}
