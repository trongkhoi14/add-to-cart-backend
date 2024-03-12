# Shopping Cart Back-end



## Getting started
### Accessing the Deployed Application
The current version of the application has been deployed and can be accessed at: 
https://add-to-cart-backend.onrender.com.

To test the APIs of the deployed application, import the file 'shopping_deployed.postman_collection.json' into Postman.

### Run the application at your local
- Clone this repository
```
git clone https://github.com/trongkhoi14/add-to-cart-backend.git
```
- Now you have a folder add-to-cart-backend that contains folders and files like these below
```
.git
src
package.json
package-lock.json
.gitignore
shopping.postman_collection.json
README.md
```
- Here are the steps to run the application at your local machine

1. Install dependecies 
```
npm install
```
Now you have all depencencies which are the system needs, move to step 2

2. Create .env file

In the folder backend, you create a file '.env', then pass content into it

```
PORT=5000

NODE_ENV=development

#DB_CONNECT_INFO
DB_HOST=localhost
DB_PORT=27017
DB_NAME=shopping-cart
DB_USER=14042002a
DB_PASSWORD=luongkhoi123
MONGO_STRING_URI=mongodb+srv://14042002a:luongkhoi123@cluster0.xro9zib.mongodb.net/shopping-cart?retryWrites=true&w=majority
```

3. Run the system
```
npm start
```

4. Use POSTMAN to test api

Once you have opened postman, you will see a button name inport at the top. You click it and import the file called 'shopping.postman_collection.json'. After that, you can test the application's api.
