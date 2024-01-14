# ECom-API
This is a simple eCommerce API built with Node.js, Express, and MongoDB for managing products. 
It includes functionality for creating, updating, deleting, and retrieving products. 
The API supports searching for products by name, description, or variant number.

## API Interactions
### Create Product
-POST /api/products/
### Update Products
-PUT /api/products/:id
### Delete Products
-DELETE /api/products/:id
### Read Products
-GET /api/products/find/:id

### Search Products
-GET /api/products/search?q={searchQuery}
### Get All Products
-GET /api/products/

## Prerequisites
  - Node.js
  - MongoDB
  - fork repo or download code
## Installation
  - npm install
## Running the Project
  - npm start (only need to run once nodemon present)
