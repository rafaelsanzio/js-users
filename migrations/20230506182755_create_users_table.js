/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("username", 255).notNullable();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.integer("age", 3).notNullable();
    table.enum("gender", ["M", "F"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("users");
}
