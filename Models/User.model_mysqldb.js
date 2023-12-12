const connection = require('../helpers/init_mysqldb');

async function getFoods() {
    const [rows] = await connection.query('SELECT * FROM users');
    return rows;
}

async function createFood(name) {
    const [result] = await connection.query(
        'INSERT INTO food (name) VALUES (?)',
        [name],
    );
    const id = result.insertId;

    return {
        food: { id, name }, // Fix here: Destructure from result, not user
    };
}

module.exports = { getFoods, createFood };
