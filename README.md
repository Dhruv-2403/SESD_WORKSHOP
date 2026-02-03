# Product Management System - SESD Workshop

A CRUD backend application built with Node.js, TypeScript, Express, and MongoDB demonstrating Object-Oriented Programming principles . We can get products stored in the database , crrate new products having atttributes like price stock quantity,etc.

## Overview

This project implements a Product Management System with complete CRUD operations using clean OOP architecture.

## Technologies Used

- Node.js with TypeScript
- Express.js
- MongoDB with Mongoose
- OOP Design Pattern

## Features

- Create, Read, Update, Delete products
- All HTTP methods: GET, POST, PUT, PATCH, DELETE
- Input validation
- Error handling
- Request logging



We use TypeScript classes to group related functionality:

**Database Class**
```typescript
class Database {
  static async connect(): Promise<void> {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}
```
This class encapsulates all database connection logic in one place.

**Controller Class**
```typescript
class ProductController {
  async getAllProducts(req: Request, res: Response): Promise<void> {
    // Handle request
  }
  
  async createProduct(req: Request, res: Response): Promise<void> {
    // Handle request
  }
}
```


We define schemas and export models:

```typescript
const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

export const ProductModel = model<IProduct>('Product', ProductSchema);
```

## Project Structure

```
src/
├── config/
│   └── database.ts        
├── models/
│   └── Product.ts          
├── controllers/
│   └── ProductController.ts
├── middlewares/
│   └── middleware.ts   
├── routes/
│   └── productRoutes.ts     
└── server.ts        
```

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
PORT=3000
MONGODB_URI=my mongodb connection string
```

3. Start the server:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Full update |
| PATCH | /api/products/:id | Partial update |
| DELETE | /api/products/:id | Delete product |

## OOP Principles Demonstrated

1. **Encapsulation** - Logic grouped in classes and modules
2. **Abstraction** - Interfaces hide implementation details
3. **Separation of Concerns** - Each file has a single responsibility
4. **Type Safety** - TypeScript interfaces ensure data integrity


