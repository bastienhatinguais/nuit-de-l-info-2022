import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Utilisateur from '../models/utilisateur.model';

/**
 * Retourne token si email et mot de passe ok
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function login(req, res) {
  const { email, motDePasse } = req.body;
  console.log(req.body);
  Utilisateur.query({
    where: { email: email },
  })
    .fetch()
    .then((utilisateur) => {
      if (utilisateur) {
        console.log(utilisateur)
        if (bcrypt.compareSync(motDePasse, utilisateur.get('motDePasse'))) {
          const token = jwt.sign(
            {
              id: utilisateur.get('id'),
              email: utilisateur.get('email'),
            },
            process.env.JWT_KEY
          );

          res.json({
            success: true,
            token,
            nom: utilisateur.get('nom'),
            prenom: utilisateur.get('prenom'),
          });
        } else {
          res.status(HttpStatus.UNAUTHORIZED).json({
            success: false,
            message: 'Connexion refusée. Mot de passe invalide.',
          });
        }
      } else {
        res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: 'Pseudo ou mot de passe invalide.',
        });
      }
    });
}

/**
 * Inscription
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function register(req, res) {
  //vérification de l'email distinct dans validator
  const { email, nom, prenom, motDePasse, description } = req.body;
  new Utilisateur({ email, nom, prenom, motDePasse: bcrypt.hashSync(motDePasse, 12), description })
    .save()
    .then((utilisateur) => {
      const token = jwt.sign(
        {
          id: utilisateur.get('id'),
          email: utilisateur.get('email'),
        },
        process.env.JWT_KEY
      );
      res.json({
        success: true,
        token,
        nom: utilisateur.get('nom'),
        prenom: utilisateur.get('prenom'),
      });
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}
