const express = require('express')
const dayjs = require('dayjs')
const router = express.Router()


const status_param = require('../services/status_param')

router.get('/', async function (req, res) {
    try {
        let site = req.query.site

        if (site && site.length > 0) {

            const result = await status_param.getStatusReading(site)

            let metadata = {
                date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                sucess: true
            }

            let payload = {
                status: result[0].item_value
            }


            res.send({ metadata, payload })

        } else {
            throw new Error('invalid site paramater')
        }

    } catch (error) {
        let metadata = {
            date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            sucess: false
        }

        let payload = {
            errorMessage: error.message
        }

        res.send({ metadata, payload })
    }

})
exports = module.exports = router

