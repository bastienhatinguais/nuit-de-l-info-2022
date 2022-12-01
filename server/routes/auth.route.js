import express from 'express';
import * as authCtrl from '../controllers/auth.controller';

const router = express.Router();

router.route('/login').post((req, res) => {
  authCtrl.login(req, res);
});

router.route('/register').post((req, res) => {
  authCtrl.register(req, res);
});

export default router;
