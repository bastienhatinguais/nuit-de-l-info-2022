import bookshelf from '../config/bookshelf';

const Reponse = bookshelf.model('Reponse', {
    tableName: 'reponse',
    question() {
        return this.belongsTo('Question')
    }
});

export default Reponse;