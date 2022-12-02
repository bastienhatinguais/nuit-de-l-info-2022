import HttpStatus from 'http-status-codes';
import Quizz_Question from '../models/quizz_question.model';

/**
 * Find all the quizz_questions
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Quizz_Question.fetchAll()
        .then((quizz_questions) => {
            res.json({
                error: false,
                data: quizz_questions.toJSON(),
            });
        })
        .catch((err) =>
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

/**
 *  Find quizz_question by question_id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findByQuestionId(req, res) {
    new Quizz_Question({ question_id: req.params.question_id })
        .fetch()
        .then((quizz_question) => {
            if (!quizz_question) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true,
                    data: {},
                });
            } else {
                res.json({
                    error: false,
                    data: quizz_question.toJSON(),
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
 *  Find quizz_question by quizz_id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findByQuizzId(req, res) {
    new Quizz_Question({ quizz_id: req.params.quizz_id })
        .fetch()
        .then((quizz_question) => {
            if (!quizz_question) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true,
                    data: {},
                });
            } else {
                res.json({
                    error: false,
                    data: quizz_question.toJSON(),
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
 * Store new quizz_question
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    console.log(req.body);
    const { quizz_id, question_id } = req.body;
    new Quizz_Question({
            quizz_id,
            question_id
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
}