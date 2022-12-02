import bookshelf from '../config/bookshelf';

const Quizz = bookshelf.model('Quizz', {
    tableName: 'quizz',
    questions() {
        return this.belongsToMany('Question')
    }
});

export default Quizz;