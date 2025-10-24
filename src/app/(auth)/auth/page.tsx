'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, ArrowRight, Chrome } from "lucide-react";
import Link from 'next/link';
import SignIn from './_components/signin';
import SignUp from './_components/signup';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';


const Auth = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router  = useRouter();



    const handleGoogleSignIn = async ()=>{
        try {
            setIsSubmitting(true);
            const result = await signIn('google', { redirect: false });

            if (result?.error) {
                toast.error('Failed to sign in with GitHub');
                console.error(result.error);
                return;
            }
            toast('Signed in with google');
            // router.push('/dashboard');
        } 
        catch (err) {
            toast('An unexpected error occurred');
            console.error(err);
        }
        finally {
            setIsSubmitting(false);
        }
    }

    const handleGitHubSignIn = async () => {
        try {
            setIsSubmitting(true);
            const result = await signIn('github', { redirect: false });
            if (result?.error) {
                toast.error('Failed to sign in with GitHub');
                console.error(result.error);
                return;
            }
            toast('Signed in with GitHub');
            // router.push('/dashboard');
        } 
        catch (err) {
            toast('An unexpected error occurred');
            console.error(err);
        }
        finally {
            setIsSubmitting(false);
        }
    };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to AI Intrvu</h1>
          <p className="text-gray-600">Your AI-powered interview preparation platform</p>
        </div>

        <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get Started</CardTitle>
                <CardDescription>Sign in to your account or create a new one</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signin" className="space-y-4 mt-6">
                        <SignIn/>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4 mt-6">
                        <SignUp/>
                    </TabsContent>
                </Tabs>


                {/* GOOGLE & GITHUB SIGNIN */}
                <div className="mt-6">
                    <Separator className="my-4" />
                    <div className="space-y-2">
                        <Button 
                            variant="outline" 
                            className="w-full" 
                            type="button"
                            onClick={handleGoogleSignIn}
                        >
                            <Chrome className="w-4 h-4 mr-2" />
                            Continue with Google
                        </Button>

                        <Button variant="outline" className="w-full" type="button"
                            onClick={handleGitHubSignIn}
                        >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            Continue with GitHub
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>


        {/* footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          By signing up, you agree to our{" "}
          <Link href="/" className="text-blue-600 hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/" className="text-blue-600 hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
