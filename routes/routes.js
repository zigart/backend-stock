let express = require('express');
let router = express.Router();
let controller = require('../controller/controller.js');

router.post('/cards/add', controller.addCard);
router.get('/cards', controller.getCards);
router.delete('/cards/:id', controller.deleteCard);
router.put('/cards/:id', controller.updateCounter);
module.exports = router;