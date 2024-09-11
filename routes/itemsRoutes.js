const { Router } = require('express');
const data = require('../data.json')

const router = Router();

router.get('/items',async(req,res) => {
  try {
      res.status(200).json(data);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})
router.post('/',() => {})
router.put('/',() => {})
router.delete('/',() => {})


module.exports = router;