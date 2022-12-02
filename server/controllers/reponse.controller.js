import HttpStatus from 'http-status-codes';
import Reponse from '../models/reponse.model';

/**
 * Find all the reponses
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Reponse.fetchAll()
        .then((reponses) => {
            res.json({
                error: false,
                data: reponses.toJSON(),
            });
        })
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 *  Find reponse by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    new Reponse({ id: req.params.id })
        .fetch()
        .then((reponse) => {
            if (!reponse) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true,
                    data: {},
                });
            } else {
                res.json({
                    error: false,
                    data: reponse.toJSON(),
                });
            }
        })
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 *  Find reponse by question_id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAllByQuestionId(req, res) {
    Reponse({ question_id: req.params.question_id }).fetch()
        .then((reponses) => {
            res.json({
                error: false,
                data: reponses.toJSON(),
            });
        })
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}