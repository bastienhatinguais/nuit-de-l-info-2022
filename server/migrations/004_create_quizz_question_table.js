/**
 * Create quizz_question table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
    return knex.schema.createTable('quizz_question', (table) => {
        table.integer('quizz_id').unsigned();
        table.integer('question_id').unsigned();
        table.foreign('quizz_id').references('id').inTable('quizz').onDelete('cascade');
        table.foreign('question_id').references('id').inTable('question').onDelete('cascade');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop quizz_question table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function(knex) {
    return knex.schema.dropTable('quizz_question');
};