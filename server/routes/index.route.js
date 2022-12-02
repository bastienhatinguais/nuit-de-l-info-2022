import express from 'express';
import postRoutes from './post.route';
import reponseRoutes from './reponse.route';
import questionRoutes from './question.route';
import quizzRoutes from './quizz.route';

const router = express.Router();

// mount user routes at /post
router.use('/post', postRoutes);

// mount user routes at /reponse
router.use('/reponse', reponseRoutes);

// mount user quizzes at /quizz
router.use('/quizz', quizzRoutes);

// mount user routes at /question
router.use('/question', questionRoutes);

export default router;
