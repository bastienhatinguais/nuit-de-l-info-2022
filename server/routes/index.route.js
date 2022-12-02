import express from 'express';
import authRoutes from './auth.route';
import questionRoutes from './question.route';
import quizzRoutes from './quizz.route';

const router = express.Router();

router.use('/auth', authRoutes);

// mount user quizzes at /quizz
router.use('/quizz', quizzRoutes);

// mount user routes at /question
router.use('/question', questionRoutes);

export default router;
