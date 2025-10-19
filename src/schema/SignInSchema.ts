import {z} from "zod"


export const SignInSchema = z.object({
    identifier: z.string({message: "invalid username or email address"}),
    password: z.string().min(4, {message: "password must be atleast of 4 characters"}).max(15, "password must not be greater than 15 characters")
})



export type SignInType = z.infer<typeof SignInSchema>