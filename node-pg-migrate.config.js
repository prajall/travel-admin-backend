// node-pg-migrate.config.js
module.exports = {
  migrationsTable: "migrations", // The table that tracks migrations
  dir: "src/db/migrations", // Directory for migration files
};
