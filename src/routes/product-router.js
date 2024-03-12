/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: The name of your product
 *         price:
 *           type: integer
 *           description: The base price of a product
 *         description:
 *           type: string
 *           description: The short description of the product
 *         image: 
 *           type: string
 *           description: "Product's image, using singImageApi to upload"
 *         color:
 *           type: string
 *           description: "Color of your product"
 *      
 * 
 *         
 */

const router = require("express").Router();
const productControllers = require("../controllers/product-controller");

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.createProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct)

module.exports = router;
