import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({
  player,
  play,
  pause,
  prev,
  next,
  playing,
  position,
  duration,
  handlePosition,
  setPosition,
  positionShown,
  progress,
  setVolume
}) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={next}
        onPlaying={playing} // NOTA_ESTUDO: Essa ação é chamada à cada segundo.
        position={player.position}
        volume={player.volume}
      />
    )}

    <Current>
      {!!player.currentSong && (
        <Fragment>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button onClick={prev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          // NOTA_ESTUDO: Quando o onClick pause é chamado o STATE: player.status é alterado e isso dispara uma REAÇÃO por parte do Sound (tag acima)
          <button onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
        <button onClick={next}>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>{positionShown || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: "10" }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
            max={1000}
            onChange={value => {
              handlePosition(value / 1000);
            }}
            onAfterChange={value => setPosition(value / 1000)}
            value={progress}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>

    {/* NOTA_ESTUDO: Para funcionar é necessário importar o estilo global do slider. Vide: ../../styles/global.js */}
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: "10" }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={player.volume}
        onChange={setVolume}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string
    }),
    status: PropTypes.string,
    volume: PropTypes.number.isRequired
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  position: PropTypes.string,
  positionShown: PropTypes.string,
  duration: PropTypes.string,
  handlePosition: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired
};

/**
 * NOTA_ESTUDO:
 * As propriedades de posição e duração da música são passadas em milisegundos, para exibir precisamos formatar.
 *
 * Com o problema acima proposto, cabem as seguintes observações:
 * 1. Não é recomendável formatar direto no REDUX e salvar a propriedade assim.
 * 2. Não é recomendável formatar diretamente no 'render' do componente.
 *
 * Solução:
 * Implementar um método para formatação e formatar as propriedades em mapStateToProps
 *
 *
 */
function msToTime(duration) {
  if (!duration) return null;

  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress:
    (state.player.positionShown || state.player.position) *
    (1000 / state.player.duration)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
