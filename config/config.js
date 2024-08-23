const env =
  // eslint-disable-next-line no-undef
  process.env;

module.exports = {
  development: {
    username: env.DB_USERNAME_DEV,
    password: env.DB_PASSWORD_DEV,
    database: env.DB_DATABASE_DEV,
    host: env.DB_HOST_DEV,
    dialect: env.DB_DIALECT,
    port: env.DB_PORT_DEV,
  },
  test: {
    username: env.DB_USERNAME_TEST,
    password: env.DB_PASSWORD_TEST,
    database: env.DB_DATABASE_TEST,
    host: env.DB_HOST_TEST,
    dialect: env.DB_DIALECT,
    port: env.DB_PORT_TEST,
  },
  production: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
    port: env.DB_PORT,
  },
};
