class ExportsHandler {
  constructor(service, validator, playlistsService) {
    this._service = service;
    this._validator = validator;
    this._playlistsService = playlistsService;

    this.postExportSongsPlaylistHandler = this.postExportSongsPlaylistHandler.bind(this);
  }

  async postExportSongsPlaylistHandler(request, h) {
    this._validator.validateExportPlaylistsPayload(request.payload);

    const { playlistId } = request.params;
    const { id: userId } = request.auth.credentials;
    await this._playlistsService.verifyPlaylistAccess(playlistId, userId);

    const message = {
      userId: request.auth.credentials.id,
      targetEmail: request.payload.targetEmail,
      playlistId,
    };

    await this._service.sendMessage('export:playlistsongs', JSON.stringify(message));

    const response = h.response({
      status: 'success',
      message: 'Permintaan Anda dalam antrean',
    });

    response.code(201);
    return response;
  }
}
module.exports = ExportsHandler;
