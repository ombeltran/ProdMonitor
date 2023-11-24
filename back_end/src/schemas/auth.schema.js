import { z } from "zod";

export const signupSchema = z.object({
    full_name: z.string({
        required_error: "The full name es required",
        invalid_type_error: "The full name must be a text"
    }).min(1).max(255),
    user: z.string({
        required_error: "The user es required",
        invalid_type_error: "The user must be a text"
    }).min(1).max(255),
    user_password: z.string({
        required_error: "The password es required"
    }).min(6, {
        message: "The password must be at least 6 characters"
    }).max(255),
});

export const loginSchema = z.object({
    user: z.string({
        required_error: "The user es required",
        invalid_type_error: "The user must be a text"
    }).min(1).max(255),
    user_password: z.string({
        required_error: "The password es required"
    }).min(6, {
        message: "The password must be at least 6 characters"
    }).max(255),
});