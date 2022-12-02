import Joi from '@hapi/joi';

export default {
    storeReponse: Joi.object({
        intitule: Joi.string().required(),
        estVrai: Joi.boolean().required(),
        question_id: Joi.number().integer().required(),
    }),

    updateReponse: Joi.object({
        intitule: Joi.string().required(),
        estVrai: Joi.boolean().required(),
        question_id: Joi.number().integer().required(),
    }),
};