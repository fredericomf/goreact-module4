import { combineReducers } from "redux";

import error from "./error";
import playlists from "./playlists";
import playlistDetails from "./playlistDetails";
import player from "./player";

export default combineReducers({
  error,
  playlists,
  playlistDetails,
  player
});
