import bookshelf from '../config/bookshelf';

const Question = bookshelf.model('Question', {
    tableName: 'question',
    reponses() {
        return this.hasMany('Reponse')
    },
    quizzs() {
        return this.belongsToMany('Quizz')
    }
});

export default Question;