import express from 'express';
import postRoutes from './post.route';

const router = express.Router();

// mount user routes at /post
router.use('/post', postRoutes);

export default router;
