const express = require('express');
const router = express.Router();

const productRouter = require("../controllers/product")

router.get('/', productRouter.getAllProduct);

router.get('/:id', productRouter.getProductById);

router.post('/', productRouter.createProduct);

router.put('/:id', productRouter.updateProduct);

router.delete('/:id', productRouter.deleteProduct);

module.exports = router;
