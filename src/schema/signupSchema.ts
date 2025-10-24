import {z} from "zod";



export const SignupSchema = z.object({
    fullName: z.string({message: "Name is required fields"}),
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(6, {message: "password must be atleast 6 characters"}).max(15, {message: "password must not be greater than 15 characters"})
})


export type SignupType = z.infer<typeof SignupSchema>