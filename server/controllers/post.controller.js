import HttpStatus from 'http-status-codes';
import Post from '../models/post.model';

/**
 * Find all the posts
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
  Post.fetchAll()
    .then((posts) => {
      res.json({
        error: false,
        data: posts.toJSON(),
      });
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

/**
 *  Find post by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
  new Post({ id: req.params.id })
    .fetch()
    .then((post) => {
      if (!post) {
        res.status(HttpStatus.NOT_FOUND).json({
          error: true,
          data: {},
        });
      } else {
        res.json({
          error: false,
          data: post.toJSON(),
        });
      }
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

/**
 * Store new post
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
  console.log(req.body);
  const { auteur, texte } = req.body;
  new Post({
    auteur,
    texte,
  })
    .save()
    .then((post) =>
      res.json({
        success: true,
        data: post.toJSON(),
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

/**
 * Update post by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
  new Post({ id: req.params.id })
    .fetch({ require: true })
    .then((post) =>
      post
        .save({
          auteur: req.body.auteur || post.get('auteur'),
          texte: req.body.texte || post.get('texte'),
        })
        .then(() =>
          res.json({
            error: false,
            data: post.toJSON(),
          })
        )
        .catch((err) =>
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: true,
            data: { message: err.message },
          })
        )
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

/**
 * Destroy post by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
  new Post({ id: req.params.id })
    .fetch({ require: true })
    .then((post) =>
      post
        .destroy()
        .then(() =>
          res.json({
            error: false,
            data: { message: 'Post deleted successfully.' },
          })
        )
        .catch((err) =>
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: true,
            data: { message: err.message },
          })
        )
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}
