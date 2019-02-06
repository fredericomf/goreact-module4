import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistActions } from "../../store/ducks/playlists"; // Importando ACTION CREATORS

import Loading from "../../components/Loading";

import { Container, Title, List, Playlist } from "./styles";

// RELEMBRANDO: STATEFULL-COMPONENT: Para tratar os estados e passos do componente

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <Title>
          Navegar
          {this.props.playlists.loading && <Loading />}
        </Title>
        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

// NOTA_ESTUDO: Mapeia uma propriedade do nosso REDUCER para as propriedades do nosso componente Sidebar. "state.playlist" vem do REDUCER
const mapStateToProps = state => ({
  playlists: state.playlists
});

/**
 * NOTA_ESTUDO: Isso fará com que cada função que temos no nosso PlaylistActions fique disponível no nosso componente Sidebar através de uma propriedade.
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
