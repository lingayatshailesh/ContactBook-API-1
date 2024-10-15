var express = require('express');
var router = express.Router();
let CC = require("../controller/contact")
let UC = require("../controller/user")

/* GET users listing. */
router.post('/create', UC.sequre, CC.contactCreate);

router.get('/alldata', UC.sequre, CC.contactFindAllData);

router.get('/:id', UC.sequre, CC.contactFindId);

router.patch('/:id', UC.sequre, CC.contactIdUpdate);

router.delete('/:id', UC.sequre, CC.contactIdDelete);

module.exports = router;
