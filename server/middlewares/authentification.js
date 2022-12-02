import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import Utilisateur from '../models/utilisateur.model';

/**
 * Route authentication middleware to verify a token
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */

export default (req, res, next) => {
  const token = req.headers['authorization'];

  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ error: "Vous n'êtes pas autorisé à faire cette opération!" });
      } else {
        Utilisateur.query({
          where: { id: decoded.id },
          select: ['email', 'id'],
        })
          .fetch()
          .then((utilisateur) => {
            if (!utilisateur) {
              res.status(HttpStatus.NOT_FOUND).json({ error: "Cet utilisateur n'existe pas" });
            } else {
              req.currentUser = utilisateur;
              next();
            }
          });
      }
    });
  } else {
    res.status(HttpStatus.FORBIDDEN).json({
      error: 'Token non fourni',
    });
  }
};
