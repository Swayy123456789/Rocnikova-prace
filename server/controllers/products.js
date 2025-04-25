const Product = require("../models/products");
const imageController = require("./image");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



exports.getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Products found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Products not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getProductById = async (req, res, next) => {
  try {
    const data = await Product.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: "Product found",
        payload: data,
      });
    }
    res.status(404).send({
      message: "Product not found",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
/*exports.createProduct = async (req, res, next) => {  
    try {
        const data = new Product({
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            type: req.body.type,
            strapMaterial: req.body.strapMaterial,
            material: req.body.material,
        })
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Product created",
                payload: result
            })
        }
        res.status(500).send({
            message: "not found",
        })
  } catch (err) {
    res.status(500).send(err);
  }
};*/
exports.updateProduct = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      type: req.body.type,
      material: req.body.material,
      strapMaterial: req.body.strapMaterial
    };

    if (req.file) {
      data.imagePath = `/img/${req.file.filename}`;
    }

    const result = await Product.findByIdAndUpdate(req.params.id, data, { new: true }); 
    if (result) {
      return res.status(200).send({
        message: "Product updated",
        payload: result,
      });
    }

    res.status(500).send({
      message: "Product not updated",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "Product deleted",
        payload: result,
      });
    }
    res.status(500).send({
      message: "Product not deleted",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const uploadFile = imageController.upload.single("imgFile");

const saveFileIntoFolder = (req, res, next) => {
  uploadFile(req, res, (err) => {
    if (err) {
      console.log(err);
      console.log("error while uploading file");
      return res.status(500).send(err);
    }
    console.log("File uploaded");
    next();
  });
};

const saveIntoDb = async (req, res) => {
  try {
    const upload = new Product({
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      type: req.body.type,
      material: req.body.material,
      strapMaterial: req.body.strapMaterial,
      imagePath: "http://localhost:3000/img/" + req.file.filename,
    });
    
    const result = await upload.save();
    if (result) {
      return res.status(201).json({
        msg: "Upload created!",
        payload: result,
      });
    }
    res.status(500).json({ msg: "Upload failed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

exports.postUpload = [saveFileIntoFolder, saveIntoDb];
