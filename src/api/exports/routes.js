const routes = (handler) => [
  {
    method: 'POST',
    path: '/exports/playlists/{playlistId}',
    handler: handler.postExportSongsPlaylistHandler,
    options: {
      auth: 'openmusik-jwt',
    },
  },
];
module.exports = routes;
