import express from 'express';
import * as postCtrl from '../controllers/post.controller';
import validate from '../config/joi.validate';
import schema from '../validators/post.validator';

const router = express.Router();

router
  .route('/')
  .post(validate(schema.storePost), (req, res) => {
    postCtrl.store(req, res);
  })
  .get((req, res) => {
    postCtrl.findAll(req, res);
  });

router
  .route('/:id')

  .get((req, res) => {
    postCtrl.findById(req, res);
  })

  .put(validate(schema.updatePost), (req, res) => {
    postCtrl.update(req, res);
  })

  .delete((req, res) => {
    postCtrl.destroy(req, res);
  });

export default router;
