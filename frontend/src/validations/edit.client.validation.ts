import { z } from "zod/v3";

export const editClientSchema = z.object({
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

})

export type EditClientFormValues = z.infer<typeof editClientSchema>

export const editClientPasswordSchema = z.object({
    password: z
    .string()
    .trim()
    .nonempty("Password is Required"),

    new_password: z
    .string()
    .trim()
    .nonempty("Password is Required"),

    confirm_new_password: z
    .string()
    .trim()
    .nonempty("Password is Required!")
}) 
.refine((data) => data.new_password === data.confirm_new_password, {
    path:["confirm_new_password"],
    message: "Password do not match",
});