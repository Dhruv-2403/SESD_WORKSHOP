import { Schema, model } from "mongoose";

export interface IProduct {
    name: string;
    description?: string;
    price: number;
    category: string;
    stock: number;
    sku: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },
        sku: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

export const ProductModel = model<IProduct>("Product", ProductSchema);
