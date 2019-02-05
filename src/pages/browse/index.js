import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://www.radiotrindademania.com.br/files/2018/12/Urban-Assault-trailer-music-album-cover.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://www.radiotrindademania.com.br/files/2018/12/Urban-Assault-trailer-music-album-cover.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://www.radiotrindademania.com.br/files/2018/12/Urban-Assault-trailer-music-album-cover.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock.</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://www.radiotrindademania.com.br/files/2018/12/Urban-Assault-trailer-music-album-cover.jpg"
          alt="playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rock.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
