import {z} from "zod";

// const verifyCode = Math.floor(100000 + Math.random()* 900000).toString()

export const VerifyCodeSchema = z.object({
    code: z.string().length(6, "Verification code must be 6 digit") 
})

export type VerifyCodeType = z.infer<typeof VerifyCodeSchema>
