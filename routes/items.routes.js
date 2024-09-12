const { Router } = require('express');
const jsonData = require('../data.json');
const {v4: uuidv4} = require('uuid')
const fs = require('fs');
const { getItemsHandler, postItemHandler } = require('../controllers/items.controllers')

const router = Router();

router.get('/items',getItemsHandler)
router.post('/items',postItemHandler)
router.put('/items/:id',() => {})
router.delete('/items/:id',() => {})


module.exports = router;