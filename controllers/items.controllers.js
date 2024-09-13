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

const editItemHandler = (req,res) => {
    const updateData = {
        id: req.params.id,
        item: req.body.item,
        description: req.body.description,
        price: req.body.price
    } 

    fs.readFile('./data.json','utf-8',(err,data) => {
        let items;
        items = JSON.parse(data)
       const index = items.findIndex(item => item.id === updateData.id)
       items.splice(index,1,updateData);
       fs.writeFile('./data.json', JSON.stringify(items),() => {
        res.status(200).json(updateData);
       })
    })
}

const deleteItemHandler = async(req,res) => {
    const id = req.params.id;
    fs.readFile('./data.json','utf-8',async(err,data) => {
        let UpdatedItems;
        UpdatedItems = await JSON.parse(data).filter(item => item.id !== id);
    fs.writeFile('./data.json',JSON.stringify(UpdatedItems),() => {
        res.status(200).json({message: "Deleted successful"})
    })
    })
}


module.exports = {
    getItemsHandler,
    postItemHandler,
    deleteItemHandler,
    editItemHandler
}


