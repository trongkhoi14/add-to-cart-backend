/**
 * @swagger
 * tags:
 *   name: products
 *   description: API endpoints for managing products
 * paths:
 *   /products:
 *     get:
 *       summary: Get all products
 *       tags: [products]
 *       responses:
 *         '200':
 *           description: OK
 *     post:
 *       summary: Create a product
 *       tags: [products]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       responses:
 *         '201':
 *           description: Created
 *         '400':
 *           description: Bad request
 *   /products/{productId}:
 *     get:
 *       summary: Get a product by ID
 *       tags: [products]
 *       parameters:
 *         - name: productId
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: OK
 *         '404':
 *           description: Not found
 *     put:
 *       summary: Update a product by ID
 *       tags: [products]
 *       parameters:
 *         - name: productId
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       responses:
 *         '200':
 *           description: OK
 *         '404':
 *           description: Not found
 *     delete:
 *       summary: Delete a product by ID
 *       tags: [products]
 *       parameters:
 *         - name: productId
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '204':
 *           description: No content
 *         '404':
 *           description: Not found
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
 *           description: The name of the product
 *         price:
 *           type: integer
 *           description: The price of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         image:
 *           type: string
 *           description: The URL of the product's image
 *         color:
 *           type: string
 *           description: The color of the product
 */

const router = require("express").Router();
const productControllers = require("../controllers/product-controller");

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.createProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

module.exports = router;
