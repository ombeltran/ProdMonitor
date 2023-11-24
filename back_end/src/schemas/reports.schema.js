import { z } from "zod";

export const createReportsSchema = z.object({
    type: z.string({
        required_error: "The type is required",
        invalid_type_error: "The type must be a string",
    }).min(1).max(255),
    model: z.string({
        required_error: "The model is required",
        invalid_type_error: "The model must be a string",
    }).min(1).max(255),
    serial_number: z.string({
        required_error: "The serial number is required",
        invalid_type_error: "The serial number must be a string and numbers",
    }).min(1).max(255),
    category: z.string({
        required_error: "The category is required",
        invalid_type_error: "The category must be a string",
    }).min(1).max(255),
    comment: z.string().min(0).max(255).optional(),
});

export const updateReportSchema = z.object({
    type: z.string({
        required_error: "The type is required",
        invalid_type_error: "The type must be a string",
    }).min(1).max(255).optional(),
    model: z.string({
        required_error: "The model is required",
        invalid_type_error: "The model must be a string",
    }).min(1).max(255).optional(),
    serial_number: z.string({
        required_error: "The serial number is required",
        invalid_type_error: "The serial number must be a string and numbers",
    }).min(1).max(255).optional(),
    category: z.string({
        required_error: "The category is required",
        invalid_type_error: "The category must be a string",
    }).min(1).max(255).optional(),
    comment: z.string().min(0).max(255).optional(),
});