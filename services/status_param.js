const dbHandler = require('../services/db')

function getStatusReading(site) {
    return new Promise((resolve, reject) => {
        try {
            let connect = dbHandler.getDatabaseConnection(site);
            if (connect) {
                connect.promise()
                    .query  (`
                                SELECT 
                                    item_name,
                                    item_value 
                                FROM bas_dev.latest_data 
                                WHERE item_name = 'Program_status'
                            `)
                    .then(([rows, fields]) => {
                        dbHandler.closeDatabaseConnection(connect)

                        resolve(rows)
                    })
                    .catch((err) => {
                        console.log(err)
                        reject(err)
                    })

            } else {
                reject(new Error('Cannot open database connection'))
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = exports = { getStatusReading }


