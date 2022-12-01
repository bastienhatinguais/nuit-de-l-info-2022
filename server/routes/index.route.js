import express from 'express';
import postRoutes from './post.route';
import authRoutes from './auth.route';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/post', postRoutes);

export default router;
