# Product Management Backend

Simple Node.js backend with **TypeScript**, MongoDB, OOP structure, and all HTTP methods.

## 🚀 Features

### CRUD Operations with All HTTP Methods
- **GET** - Retrieve all products or single product
- **POST** - Create new product
- **PUT** - Full update of product
- **PATCH** - Partial update of product
- **DELETE** - Remove product

### TypeScript + OOP Structure
- **TypeScript** - Full type safety with interfaces
- **Models** - Mongoose schemas with Document interface
- **Controllers** - Request handling with typed class
- **Middleware** - Logging, validation, error handling

### Middleware
- ✅ Request logging
- ✅ Input validation
- ✅ Error handling (Mongoose errors, validation, duplicates)

## 📁 Project Structure

```
SESD_Workshop/
├── src/
│   ├── config/
│   │   └── database.js       # MongoDB connection
│   ├── models/
│   │   └── Product.js        # Mongoose model
│   ├── controllers/
│   │   └── ProductController.js  # All HTTP methods
│   ├── middlewares/
│   │   └── middleware.js     # Logging, validation, errors
│   ├── routes/
│   │   └── productRoutes.js  # API routes
│   └── server.js             # Entry point
├── package.json
└── .env
```

## 🛠️ Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (running locally or MongoDB Atlas)

### Installation

```bash
# Install dependencies
npm install

# Start MongoDB (if running locally)
mongod

# Start server
npm run dev
```

Server runs on `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Full update |
| PATCH | `/api/products/:id` | Partial update |
| DELETE | `/api/products/:id` | Delete product |

## 📝 API Examples

### Create Product (POST)
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "Gaming laptop",
    "price": 1200,
    "category": "Electronics",
    "stock": 10,
    "sku": "LAP001"
  }'
```

### Get All Products (GET)
```bash
curl http://localhost:3000/api/products
```

### Get Single Product (GET)
```bash
curl http://localhost:3000/api/products/{id}
```

### Full Update (PUT)
```bash
curl -X PUT http://localhost:3000/api/products/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gaming Laptop",
    "description": "High-end gaming laptop",
    "price": 1500,
    "category": "Electronics",
    "stock": 8,
    "sku": "LAP001"
  }'
```

### Partial Update (PATCH)
```bash
curl -X PATCH http://localhost:3000/api/products/{id} \
  -H "Content-Type: application/json" \
  -d '{"stock": 5}'
```

### Delete Product (DELETE)
```bash
curl -X DELETE http://localhost:3000/api/products/{id}
```

## 🔧 Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/products_db
NODE_ENV=development
```

## 📚 OOP Implementation

### Model (Product.js)
```javascript
class Product {
  static model = mongoose.model('Product', productSchema);
  static async create(data) { ... }
  static async findAll() { ... }
  // ... other methods
}
```

### Controller (ProductController.js)
```javascript
class ProductController {
  async getAllProducts(req, res, next) { ... }
  async createProduct(req, res, next) { ... }
  // ... all HTTP methods
}
```

### Middleware
- **Logger** - Logs all requests
- **Validator** - Validates product data
- **Error Handler** - Handles all errors gracefully

## ✅ Validation

Products must have:
- `name` - Required, non-empty string
- `price` - Required, positive number
- `category` - Required, non-empty string
- `stock` - Required, non-negative number
- `sku` - Required, unique string
- `description` - Optional string

## 🎓 Learning Points

- ✅ Node.js with Express
- ✅ MongoDB with Mongoose
- ✅ OOP patterns (classes, static methods)
- ✅ All HTTP methods (GET, POST, PUT, PATCH, DELETE)
- ✅ Middleware (logging, validation, error handling)
- ✅ RESTful API design
- ✅ Environment variables
- ✅ Error handling

---

**SESD Workshop Assignment** 🚀
# SESD_WORKSHOP
