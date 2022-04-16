import { Sequelize, DataTypes } from 'sequelize';
import connection from '../config/database.js';

const User = connection.define('user', {
    user_access: DataTypes.STRING,
    name: {type: DataTypes.STRING, allowNull: false},
    username: {type: DataTypes.STRING, allowNull:false},
    email: DataTypes.STRING,
    password: {type: DataTypes.STRING, allowNull: false},
    dob: DataTypes.STRING
}, {
  freezeTableName: true
});

export default User;

(async()=> {
    await connection.sync();
})()