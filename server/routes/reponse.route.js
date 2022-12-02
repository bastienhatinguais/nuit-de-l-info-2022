import express from 'express';
import * as reponseCtrl from '../controllers/reponse.controller';
import validate from '../config/joi.validate';
import schema from '../validators/reponse.validator';

const router = express.Router();

router
  .route('/')
  .post(validate(schema.storeReponse), (req, res) => {
    reponseCtrl.store(req, res);
  })
  .get((req, res) => {
    reponseCtrl.findAll(req, res);
  });

router
  .route('/:question_id')
  .get((req, res) => {
    reponseCtrl.findAllByQuestionId(req, res);
  })
  .put(validate(schema.updateReponse), (req, res) => {
    reponseCtrl.update(req, res);
  })
  .delete((req, res) => {
    reponseCtrl.destroy(req, res);
  });

export default router;
