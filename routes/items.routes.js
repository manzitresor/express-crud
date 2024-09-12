const { Router } = require('express');
const { getItemsHandler, postItemHandler, deleteItemHandler } = require('../controllers/items.controllers')

const router = Router();

router.get('/items', getItemsHandler)
router.post('/items', postItemHandler)
router.put('/items/:id',() => {})
router.delete('/items/:id', deleteItemHandler)


module.exports = router;