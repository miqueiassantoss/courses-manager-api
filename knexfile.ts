import { after } from "node:test";

export default {
  client: "sqlite3",
  connection: {
    filename: "src/database/database.db", //informando onde vai ser o BD
  },
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreign_keys = ON")
      done()
    }
  },
  useNullAsDefault: true, //pra não ter problema de compatibilidade.
  migrations: {
    extensions: "ts",
    directory: "src/database/migrations", //pasta pras migrations
  },
  seeds: {
    extensions: "ts",
    directory: "src/database/seed", //pasta pras seeds
  },
}
