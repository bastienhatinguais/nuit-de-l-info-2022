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
    .fetch({ withRelated: ['reponses'] })
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
