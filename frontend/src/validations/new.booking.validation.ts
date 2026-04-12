import { z } from 'zod/v3';

export const newBookingSchema = z.object({
  fullname: z.string().trim().nonempty('Fullname is Required'),
  email: z.string().trim().email('Invalid email address').nonempty('Email is Required'),
  contact_number: z
    .string()
    .trim()
    .nonempty('Phone Number is Required')
    .regex(/^(09|\+639|639)\d{9}$/, 'Invalid Phone Number'),
  branch: z.string().trim().nonempty('Branch is Required'),
  service: z.string().trim().nonempty('Service is Required'),
  barber: z.string().trim().nonempty('Barber is Required'),
  booking_date: z.date({
    required_error: 'Date is Required',
    invalid_type_error: 'Date is Required',
  }),
  booking_time: z.string().trim().nonempty('Time is Required'),
});

export type NewBookingFormValues = z.infer<typeof newBookingSchema>;
