import { Sequelize } from "sequelize";

const connection = new Sequelize('ijmotor-db', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});

export default connection;