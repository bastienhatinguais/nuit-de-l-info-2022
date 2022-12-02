import HttpStatus from 'http-status-codes';
import Quizz from '../models/quizz.model';
import Question from '../models/question.model';
import * as questionCtrl from '../controllers/question.controller';

/**
 * Find all the quizzs
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Quizz.fetchAll()
        .then((quizzs) => {
            res.json({
                error: false,
                data: quizzs.toJSON(),
            });
        })
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 *  Find quizz by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    new Quizz({ id: req.params.id })
        .fetch()
        .then((quizz) => {
            if (!quizz) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true,
                    data: {},
                });
            } else {
                res.json({
                    error: false,
                    data: quizz.toJSON(),
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
 * Store new quizz
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    console.log(req.body);
    const { utilisateur_id } = req.body;
    const allQuestions = questionCtrl.findAll();
    var size = Object.keys(allQuestions).length;
    var tabIndex = []
    for (let index = 0; index < 10; index++) {
        const element = array[index];
        var nb = Math.floor(Math.random() * size)
        while (tabIndex.includes(nb)) {
            nb = Math.floor(Math.random() * size)
        }
        tabIndex.push(nb);
    }
    var quizz_id = 0
    new Quizz({
            utilisateur_id
        })
        .save()
        .then((quizz) => {
            quizz_id = quizz.id
            res.json({
                success: true,
                data: quizz.toJSON(),
            })
        })
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
    tabIndex.forEach(index => {
        new Question({ id: index })
            .fetch({ withRelated: ['reponses'] })
            .then((question) => {
                new Quizz_Question({
                        quizz_id,
                        index
                    })
                    .save()
                    .then((quizz_question) =>
                        res.json({
                            success: true,
                            data: quizz_question.toJSON(),
                        })
                    )
                    .catch((err) =>
                        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                            error: err,
                        })
                    );
            })
            .catch((err) =>
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: err,
                })
            );
    });
}

/**
 * Update quizz by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    new Quizz({ id: req.params.id })
        .fetch({ require: true })
        .then((quizz) =>
            quizz
            .save({
                utilisateur_id: req.body.utilisateur_id || quizz.get('utilisateur_id'),
                temps: req.body.temps || quizz.get('temps'),
                score: req.body.score || quizz.get('score'),
            })
            .then(() =>
                res.json({
                    error: false,
                    data: quizz.toJSON(),
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
 * Destroy quizz by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    new Quizz({ id: req.params.id })
        .fetch({ require: true })
        .then((quizz) =>
            quizz
            .destroy()
            .then(() =>
                res.json({
                    error: false,
                    data: { message: 'Quizz deleted successfully.' },
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