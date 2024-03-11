
const getAllProducts = async (req, res) => {
    return res.status(200).json({
        data: 'all products'
    });
};

const getProductById = async (req, res) => {
    return res.status(200).json({
        data: 'a product'
    });
};

const createProduct = async (req, res) => {
    return res.status(200).json({
        data: 'add products'
    });
};

const updateProduct = async (req, res) => {
    return res.status(200).json({
        data: 'update products'
    });
};

const deleteProduct = async (req, res) => {
    return res.status(200).json({
        data: 'del products'
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}