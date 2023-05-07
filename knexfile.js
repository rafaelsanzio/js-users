// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "sqlite3",
  connection: {
    filename: "./dev.sqlite3",
  },
};
export const staging = {
  client: "postgresql",
  connection: {
    host: "db.auqctsjnascrxzleruav.supabase.co",
    database: "postgres",
    user: "postgres",
    password: "Forfun442@876##",
    port: 5432,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
export const production = {
  client: "postgresql",
  connection: {
    host: "db.auqctsjnascrxzleruav.supabase.co",
    database: "postgres",
    user: "postgres",
    password: "Forfun442@876##",
    port: 5432,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
