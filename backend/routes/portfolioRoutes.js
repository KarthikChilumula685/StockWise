import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/portfolio', authMiddleware, (req, res) => {
  res.json({ msg: `Welcome ${req.user.userId}, here is your portfolio data!` });
});

export default router;
