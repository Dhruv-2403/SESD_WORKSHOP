import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../models/Product";

class ProductController {

    async getAllProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await ProductModel.find();

            res.status(200).json({
                success: true,
                count: products.length,
                data: products
            });
        } catch (error) {
            next(error);
        }
    }

    async getProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductModel.findById(req.params.id);

            if (!product) {
                res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                data: product
            });
        } catch (error) {
            next(error);
        }
    }

    async createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductModel.create(req.body);

            res.status(201).json({
                success: true,
                message: "Product created successfully",
                data: product
            });
        } catch (error) {
            next(error);
        }
    }

    async updateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );

            if (!product) {
                res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Product updated successfully",
                data: product
            });
        } catch (error) {
            next(error);
        }
    }

    async patchProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );

            if (!product) {
                res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Product partially updated",
                data: product
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await ProductModel.findByIdAndDelete(req.params.id);

            if (!product) {
                res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new ProductController();
