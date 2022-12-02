import bookshelf from '../config/bookshelf';

const Utilisateur = bookshelf.model('Utilisateur', {
  tableName: 'utilisateurs',
});

export default Utilisateur;
