// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host: 'db.backend.dev',
      database: 'backend',
      user: 'root',
      password: 'root',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
  },

  staging: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host: 'db.backend.dev:3306',
      database: 'backend',
      user: 'root',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host: 'db.backend.dev:3306',
      database: 'backend',
      user: 'root',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
