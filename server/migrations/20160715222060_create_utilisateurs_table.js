/**
 * Create utilisateurs table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function (knex) {
  return knex.schema.createTable('utilisateurs', (table) => {
    table.increments('id').primary().unsigned();
    table.string('email').unique().notNullable();
    table.string('description').notNullable();
    table.string('nom').notNullable();
    table.string('prenom').notNullable();
    table.string('motDePasse').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

/**
 * Drop posts table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
  return knex.schema.dropTable('utilisateurs');
};
