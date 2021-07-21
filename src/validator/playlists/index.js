const InvariantError = require('../../exceptions/InvariantError');
const {
  PlaylistPayloadSchema,
  PlaylistsongsPayloadSchema,
} = require('./schema');

const PlaylistsValidator = {
  validatePlaylistPayload: (payload) => {
    const validationResult = PlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePlaylistsongPayload: (payload) => {
    const validationResult = PlaylistsongsPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
module.exports = PlaylistsValidator;
