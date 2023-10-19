const express = require('express')
const router = express.Router();

const {sendTheUserData} = require('../controllers/serviceController')

router.post('/',sendTheUserData)


module.exports = router;