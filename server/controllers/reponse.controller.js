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
 * Store new reponse
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    console.log(req.body);
    const { intitule, estVrai, question_id } = req.body;
    new Reponse({
            intitule,
            estVrai,
            question_id
        })
        .save()
        .then((reponse) =>
            res.json({
                success: true,
                data: reponse.toJSON(),
            })
        )
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 * Update reponse by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    new Reponse({ id: req.params.id })
        .fetch({ require: true })
        .then((reponse) =>
            reponse
            .save({
                intitule: req.body.intitule || reponse.get('intitule'),
                estVrai: req.body.estVrai || reponse.get('estVrai'),
                question_id: req.body.question_id || reponse.get('question_id'),
            })
            .then(() =>
                res.json({
                    error: false,
                    data: reponse.toJSON(),
                })
            )
            .catch((err) =>
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: { message: err.message },
                })
            )
        )
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 * Destroy reponse by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    new Reponse({ id: req.params.id })
        .fetch({ require: true })
        .then((reponse) =>
            reponse
            .destroy()
            .then(() =>
                res.json({
                    error: false,
                    data: { message: 'Reponse deleted successfully.' },
                })
            )
            .catch((err) =>
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: { message: err.message },
                })
            )
        )
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}