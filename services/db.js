const mysql = require('mysql2')
const config = require('../config')
// const express = require('express')


function getDatabaseConnection(site) {
    if (site) {
        let dbConfig = null;

        if (site === 'tai_po') {
            dbConfig = config.dbTaiPo;
        }

        if (dbConfig) {
            let conn = mysql.createConnection(dbConfig)
            // console.log('get connection', conn._internalId)
            return conn
        } else {
            throw new Error('Site database config not found')
        }
    } else {
        throw new Error('Missing Site variable')
    }
}

function closeDatabaseConnection(conn) {
    // console.log('close connection', conn._internalId)
    if (conn) {
        conn.end()
    }
}

module.exports = exports = {
    getDatabaseConnection,
    closeDatabaseConnection
}



