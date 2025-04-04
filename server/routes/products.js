const express = require('express');
const router = express.Router();

const productsRouter = require("../controllers/products")

router.get('/', productsRouter.getAllProducts);

router.get('/:id', productsRouter.getProductById);

router.post('/', productsRouter.postUpload);

router.put('/:id', productsRouter.updateProduct);

router.delete('/:id', productsRouter.deleteProduct);

module.exports = router;
