const asyncHandler = require('express-async-handler');
const productModel = require('../models/product-model');
const mongoose = require('mongoose');

const getAllProducts = async (req, res) => {
    const products = await productModel.find();
    return res.status(200).json({
        message: products ? "Get all products successfully": "Cannot get all products",
        data: products ? products:"",
    });
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: `Invalid product ID: ${id}`,
            data: []
        });
    }

    const product = await productModel.findById(id);

    if (!product) {
        return res.status(404).json({
            message: `Cannot find product with id: ${id}`,
            data: []
        });
    }

    return res.status(200).json({
        message: "Get product successfully",
        data: product 
    });
};

const createProduct = asyncHandler(async (req, res) => {
    if(Object.keys(req.body).length === 0) throw new Error("Missing product information");

    const {name, price} = req.body;

    if (!name || !price) {
        throw new Error("Missing product information");
    }

    const newProduct = await productModel.create(req.body);
   
    return res.status(200).json({
        message: newProduct ? "Create product successfully": "Cannot create new product",
        data: newProduct ? newProduct:"",
    })
});

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: "Nothing was updated",
            data: []
        })
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: `Invalid product ID: ${id}`,
            data: []
        });
    }

    const existedProduct = await productModel.findById(id);

    if (!existedProduct) {
        return res.status(404).json({
            message: `Cannot find product with id: ${id}`,
            data: []
        });
    }

    const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, {new: true});
    
    return res.status(200).json({
        message: updatedProduct? "Update product successfully" : "Cannot update product",
        data: updatedProduct? updatedProduct:[]
    })
});

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: `Invalid product ID: ${id}`,
            data: []
        });
    }

    const existedProduct = await productModel.findById(id);

    if (!existedProduct) {
        return res.status(404).json({
            message: `Cannot find product with id: ${id}`,
            data: []
        });
    }

    const deletedProduct = await productModel.findByIdAndDelete(id)

    return res.status(200).json({
        message: deletedProduct? "Delete product successfully" : "Cannot delete product",
        data: deletedProduct? deletedProduct:[]
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}