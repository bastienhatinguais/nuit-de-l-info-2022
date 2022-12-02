import Joi from '@hapi/joi';

export default {
    storeQuestion: Joi.object({
        intitule: Joi.string().required(),
        explication: Joi.string().required(),
    }),

    updateQuestion: Joi.object({
        intitule: Joi.string().required(),
        explication: Joi.string().required(),
    }),
};