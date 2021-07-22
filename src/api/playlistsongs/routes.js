const routes = (handler) => [
  // song to playlist
  {
    method: 'POST',
    path: '/playlists/{playlistId}/songs',
    handler: handler.postSongToPlaylistHandler,
    options: {
      auth: 'openmusik-jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists/{playlistId}/songs',
    handler: handler.getSongFromPlaylistHandler,
    options: {
      auth: 'openmusik-jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/playlists/{playlistId}/songs',
    handler: handler.deleteSongFromPlaylistHandler,
    options: {
      auth: 'openmusik-jwt',
    },
  },
];

module.exports = routes;
