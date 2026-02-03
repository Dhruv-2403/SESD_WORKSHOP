import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
export const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
    next();
};


export const validateProduct = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { name, price, category, stock, sku } = req.body;
    const errors: string[] = [];

    if ("name" in req.body && (!name || name.trim() === "")) {
        errors.push("Name is required");
    }

    if ("price" in req.body && (typeof price !== "number" || price < 0)) {
        errors.push("Price must be a positive number");
    }

    if ("category" in req.body && (!category || category.trim() === "")) {
        errors.push("Category is required");
    }

    if ("stock" in req.body && (typeof stock !== "number" || stock < 0)) {
        errors.push("Stock cannot be negative");
    }

    if ("sku" in req.body && (!sku || sku.trim() === "")) {
        errors.push("SKU is required");
    }

    if (errors.length > 0) {
        res.status(400).json({
            success: false,
            message: "Validation failed",
            errors
        });
        return;
    }

    next();
};


export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    console.error("Error:", err);

    if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map(
            (e: any) => e.message
        );

        res.status(400).json({
            success: false,
            message: "Validation failed",
            errors
        });
        return;
    }


    if (err.code === 11000) {
        res.status(409).json({
            success: false,
            message: "Product with this SKU already exists"
        });
        return;
    }

    //   
    if (err.name === "CastError") {
        res.status(400).json({
            success: false,
            message: "Invalid product ID format"
        });
        return;
    }

    res.status(500).json({
        success: false,
        message: err.message || "Internal server error"
    });
};
