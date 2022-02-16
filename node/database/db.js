import {Sequelize} from 'sequelize';
import mySQLCredentials from './credentials.js';

const db = new Sequelize(mySQLCredentials.database, mySQLCredentials.user, 
    mySQLCredentials.password, {
        host: 'localhost',
        dialect: 'mysql'
    });

export default db;    

