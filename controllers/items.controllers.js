const fs = require('fs');
const jsonData = require('../data.json');
const {v4: uuidv4} = require('uuid');

const getItemsHandler = async(req,res) => {
    try {
        res.status(200).json(jsonData)
    } catch (err) {
        res.status(500).json({message: err.message })
    }
}

const postItemHandler = async(req,res) => {
    const newItem = {
        id: uuidv4(),
        item: req.body.item,
        description: req.body.description,
        price: req.body.price
    }
    fs.readFile('./data.json','utf8', async(err,data) => {
        if(err) return res.status(500).json({message: err.message})
        let items=[];
        try {
            items = await JSON.parse(data)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
        items.push(newItem)
        fs.writeFile('./data.json',JSON.stringify(items),() => {
            res.status(201).json(newItem)
        })
    })
}


module.exports = {
    getItemsHandler,
    postItemHandler
}


