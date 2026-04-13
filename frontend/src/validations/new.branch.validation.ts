import { z } from "zod/v3";

export const branchInfoSchema = z.object({
  name: z.string().trim().nonempty("Branch Name is Required"),
  location: z.string().trim().nonempty("Branch Location is Required"),
});

export const partnerInfoSchema = z.object({
  first_name: z.string().trim().nonempty("First Name is Required"),
  last_name: z.string().trim().nonempty("Last Name is Required"),
  contact_number: z
    .string()
    .trim()
    .nonempty("Phone Number is Required")
    .regex(/^(09|\+639|639)\d{9}$/, "Invalid Phone Number"),
  status: z
    .string()
    .trim()
    .nonempty("Status is Required")
    .refine((value) => ["active", "inactive"].includes(value.toLowerCase()), {
      message: "Invalid status. Must be either 'active' or 'inactive'",
    }),
});

export const partnerAccountSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .nonempty("Email is Required"),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .nonempty("Password is Required"),
    confirm_password: z
      .string()
      .trim()
      .nonempty("Confirm Password is Required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
  });

export const createBranchSchema = branchInfoSchema
  .merge(partnerInfoSchema)
  .and(partnerAccountSchema);

export type CreateBranchFormValues = z.infer<typeof createBranchSchema>;
