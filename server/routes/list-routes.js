const express = require('express');

const ListCtrl = require('../controllers/list-ctrl')

const router = express.Router();


router.get("/", ListCtrl.getList);
router.post("/", ListCtrl.createItem);
router.delete("/:id", ListCtrl.deleteItem);

module.exports = router;