import { z } from "zod/v3";

export const loginSchema = z.object({
    email: z
    .string()
    .trim()
    .email("Invalid email address")
    .nonempty("Email is Required"),

    password: z
    .string()
    .trim()
    .nonempty("Password is Required"),
})

export type LoginFormValues = z.infer<typeof loginSchema>


export const createAccountSchema = z.object({
    first_name: z
    .string()
    .trim()
    .nonempty("First Name is Required"),

    last_name: z
    .string()
    .trim()
    .nonempty("Last Name is Required"),

    email: z
    .string()
    .trim()
    .email("Invalid email address")
    .nonempty("Email is Required"),

    contact_number: z
    .string()
    .trim()
    .nonempty("Phone Number is Required")
    .regex(/^(09|\+639|639)\d{9}$/, "Invalid Phone Number"),

    password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .nonempty("Password is Required"),

    confirm_password: z
    .string()
    .trim()
    .nonempty("Password is Required!")
}) 
.refine((data) => data.password === data.confirm_password, {
    path:["confirm_password"],
    message: "Password do not match",
});

export type CreateAccountFormValues = z.infer<typeof createAccountSchema>;
