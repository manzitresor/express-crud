const { Router } = require('express');
const { 
    getItemsHandler, 
    postItemHandler, 
    deleteItemHandler, 
    editItemHandler 
    } = require('../controllers/items.controllers')

const router = Router();

router.get('/items', getItemsHandler)
router.post('/items', postItemHandler)
router.put('/items/:id',editItemHandler)
router.delete('/items/:id', deleteItemHandler)


module.exports = router;