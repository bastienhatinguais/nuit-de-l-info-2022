/**
 * Create quizz table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
    return knex.schema.createTable('quizz', (table) => {
        table.increments('id').primary().unsigned();
        table.float('temps').notNullable();
        table.integer('score').notNullable();
        table.timestamp('date').defaultTo(knex.fn.now());
        table.integer('utilisateur_id').unsigned();
        //table.foreign('utilisateur_id').references('id').inTable('utilisateur').onDelete('cascade');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop quizz table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function(knex) {
    return knex.schema.dropTable('quizz');
};