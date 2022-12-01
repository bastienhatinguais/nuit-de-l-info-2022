import express from 'express';
import * as questionCtrl from '../controllers/question.controller';
import validate from '../config/joi.validate';
import schema from '../validators/question.validator';

const router = express.Router();

router
    .route('/')
    .post(validate(schema.storeQuestion), (req, res) => {
        questionCtrl.store(req, res);
    })
    .get((req, res) => {
        questionCtrl.findAll(req, res);
    });

router
    .route('/:id')

.get((req, res) => {
    questionCtrl.findById(req, res);
})

.put(validate(schema.updateQuestion), (req, res) => {
    questionCtrl.update(req, res);
})

.delete((req, res) => {
    questionCtrl.destroy(req, res);
});

export default router;