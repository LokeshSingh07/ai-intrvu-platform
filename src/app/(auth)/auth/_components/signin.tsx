'use client'
import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'sonner';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import { Loader2, Lock, User } from 'lucide-react';
import z from 'zod';
import { SignInSchema, SignInType } from '@/schema/SignInSchema';
import { signIn } from 'next-auth/react';




const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const router = useRouter()


  
    const register = useForm<SignInType>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            identifier: "",
            password: ""
        }
    })

  
  
    const onSubmit: SubmitHandler<SignInType> = async(data: z.infer<typeof SignInSchema>) => {
        try{
            setIsSubmitting(true);

            const response = await signIn('credentials', {
                redirect: false,
                identifier: data.identifier,
                password: data.password
            });
    
            if (response?.error) {
                toast(response.error);
                return;
            }
            
            toast("Logged in Successfully")
            router.push("/dashboard")
        }
        catch(err){
            toast('An unexpected error occurred')
            console.log(err)
        }
        finally{
            setIsSubmitting(false);
        }
    };





  return (
    <div>
        <Form {...register}>
            <form onSubmit={register.handleSubmit(onSubmit)} className="space-y-8">
                {/* Email */}
                <FormField
                    control={register.control}
                    name="identifier"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <div className='relative'>
                                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input 
                                        placeholder="Enter you email address" 
                                        className='pl-10'
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password */}
                <FormField
                    control={register.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className='relative'>
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input 
                                        placeholder="Enter your password" 
                                        type='password'
                                        className='pl-10'
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                <Button type="submit" className="w-full" variant={"gradient"}>
                    {
                        isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Creating your account...
                        </>
                        ) : ("Create Account")
                    }
                </Button>
            </form>
        </Form>

    </div>
  );
};

export default SignUp;
