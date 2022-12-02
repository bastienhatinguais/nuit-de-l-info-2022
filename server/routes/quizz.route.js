import express from 'express';
import * as quizzCtrl from '../controllers/quizz.controller';
import { autorisation } from '../middlewares/authentification';

const router = express.Router();

router.route('/').post(autorisation, (req, res) => {
  quizzCtrl.store(req, res);
});

export default router;
