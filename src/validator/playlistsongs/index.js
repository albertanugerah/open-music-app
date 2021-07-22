const InvariantError = require('../../exceptions/InvariantError');
const { SongToPlaylistPayloadSchema } = require('./schema');

const SongToPlaylistValidator = {
  validateSongToPlaylistPayload: (payload) => {
    const validationResult = SongToPlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongToPlaylistValidator;
