"use server"
import prisma from "@/lib/prisma"
import { errorResponse, successResponse } from "@/lib/response";
import { SignupType } from "@/schema/signupSchema"
import bcrypt from "bcryptjs";


interface propsInterface{
    fullName: string,
    email: string,
    password: string,
    verifyCode?: string
}


export async function createAccount({fullName, email, password, verifyCode="123123"}: propsInterface){
    try{
        // check if user already exist
        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if(existingUser){
            return errorResponse("User already exist. Please login!");
        }

        // hashed the pass
        const hashedPassword = await bcrypt.hash(password, 10);
        
        

        // create user
        const user = await prisma.user.create({
            data: {
                fullName,
                email,
                password: hashedPassword,
                verifyCode,
                experienceLevel: "junior",
                targetCompanySize: "small",
                industry: [],
                targetRoles: [],
                focusArea: []
            }
        })


        const { password: _, ...userWithoutPassword } = user;

        return successResponse(userWithoutPassword, "Account created")
    }
    catch(err){
        return errorResponse();
    }
}


