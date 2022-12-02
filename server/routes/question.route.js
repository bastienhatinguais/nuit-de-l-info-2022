import express from 'express';
import * as questionCtrl from '../controllers/question.controller';
import { autorisation } from '../middlewares/authentification';

const router = express.Router();

router.route('/').get(autorisation, (req, res) => {
  questionCtrl.findAll(req, res);
});

export default router;
