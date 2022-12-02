/**
 * Create reponse table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
    return knex.schema.createTable('reponse', (table) => {
        table.increments('id').primary().unsigned();
        table.string('intitule').notNullable();
        table.boolean('estVrai').notNullable();
        table.integer('question_id').unsigned();
        table.foreign('question_id').references('id').inTable('question').onDelete('cascade');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop reponse table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function(knex) {
    return knex.schema.dropTable('reponse');
};