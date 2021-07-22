const Joi = require('joi');

const SongToPlaylistPayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

module.exports = {
  SongToPlaylistPayloadSchema,
};
