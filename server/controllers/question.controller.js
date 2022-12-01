import HttpStatus from 'http-status-codes';
import Question from '../models/question.model';

/**
 * Find all the questions
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Question.fetchAll()
        .then((questions) => {
            res.json({
                error: false,
                data: questions.toJSON(),
            });
        })
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 *  Find question by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    new Question({ id: req.params.id })
        .fetch()
        .then((question) => {
            if (!question) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true,
                    data: {},
                });
            } else {
                res.json({
                    error: false,
                    data: question.toJSON(),
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
 * Store new question
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    console.log(req.body);
    const { intitule, explication } = req.body;
    new Question({
            intitule,
            explication,
        })
        .save()
        .then((question) =>
            res.json({
                success: true,
                data: question.toJSON(),
            })
        )
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 * Update question by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    new Question({ id: req.params.id })
        .fetch({ require: true })
        .then((question) =>
            question
            .save({
                intitule: req.body.intitule || question.get('intitule'),
                explication: req.body.explication || question.get('explication'),
            })
            .then(() =>
                res.json({
                    error: false,
                    data: question.toJSON(),
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
 * Destroy question by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    new Question({ id: req.params.id })
        .fetch({ require: true })
        .then((question) =>
            question
            .destroy()
            .then(() =>
                res.json({
                    error: false,
                    data: { message: 'Question deleted successfully.' },
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