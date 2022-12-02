import express from 'express';
import * as quizzCtrl from '../controllers/quizz.controller';
import validate from '../config/joi.validate';
import schema from '../validators/question.validator';

const router = express.Router();

router
  .route('/')
  .post(validate(schema.storeQuestion), (req, res) => {
    quizzCtrl.store(req, res);
  })
  .get((req, res) => {
    quizzCtrl.generateQuestions(req, res);
  });

router
  .route('/:id')

  .get((req, res) => {
    quizzCtrl.findById(req, res);
  })

  .put(validate(schema.updateQuestion), (req, res) => {
    quizzCtrl.update(req, res);
  })

  .delete((req, res) => {
    quizzCtrl.destroy(req, res);
  });

export default router;
