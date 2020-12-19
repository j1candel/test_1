module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: ""
    },
    pool: {
        afterCreate : (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done);
        }
    }
};

