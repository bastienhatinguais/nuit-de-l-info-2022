import Joi from '@hapi/joi';

export default {
  storePost: Joi.object({
    auteur: Joi.string().required(),
    texte: Joi.string().required(),
  }),

  updatePost: Joi.object({
    auteur: Joi.string().required(),
    texte: Joi.string().required(),
  }),
};
