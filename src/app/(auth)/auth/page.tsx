'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chrome, Github } from "lucide-react";
import Link from 'next/link';
import SignIn from './_components/signin';
import SignUp from './_components/signup';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { platformName } from '@/data/constant';


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
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center p-4">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap');
        .auth-display { font-family: 'Space Grotesk', sans-serif; }
        .auth-body { font-family: 'IBM Plex Sans', sans-serif; }
        .auth-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="auth-mono text-xs tracking-[0.18em] uppercase text-[#3E63DD] mb-3">
            Welcome
          </div>
          <h1 className="auth-display text-3xl font-bold text-[#12151B] mb-2">{platformName}</h1>
          <p className="auth-body text-[#6B7280]">Your AI-powered interview preparation platform</p>
        </div>

        <Card className="border border-[#12151B]/10 rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(18,21,27,0.12)]">
            <CardHeader className="text-center">
                <CardTitle className="auth-display text-2xl font-semibold text-[#12151B]">Get started</CardTitle>
                <CardDescription className="auth-body text-[#6B7280]">Sign in to your account or create a new one</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-[#F1EFEA] rounded-lg">
                        <TabsTrigger
                            value="signin"
                            className="auth-mono text-xs tracking-wide uppercase data-[state=active]:bg-[#12151B] data-[state=active]:text-white rounded-md"
                        >
                            Sign in
                        </TabsTrigger>
                        <TabsTrigger
                            value="signup"
                            className="auth-mono text-xs tracking-wide uppercase data-[state=active]:bg-[#12151B] data-[state=active]:text-white rounded-md"
                        >
                            Sign up
                        </TabsTrigger>
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
                    <div className="flex items-center gap-3 my-4">
                        <Separator className="flex-1 bg-[#12151B]/10" />
                        <span className="auth-mono text-[10px] tracking-wide uppercase text-[#8A8F9C]">or</span>
                        <Separator className="flex-1 bg-[#12151B]/10" />
                    </div>
                    <div className="space-y-2">
                        <Button
                            variant="outline"
                            className="auth-body w-full border-[#12151B]/15 text-[#12151B] hover:bg-[#F1EFEA] rounded-lg"
                            type="button"
                            disabled={isSubmitting}
                            onClick={handleGoogleSignIn}
                        >
                            <Chrome className="w-4 h-4 mr-2" />
                            Continue with Google
                        </Button>

                        <Button
                            variant="outline"
                            className="auth-body w-full border-[#12151B]/15 text-[#12151B] hover:bg-[#F1EFEA] rounded-lg"
                            type="button"
                            disabled={isSubmitting}
                            onClick={handleGitHubSignIn}
                        >
                            <Github className="w-4 h-4 mr-2" />
                            Continue with GitHub
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>


        {/* footer */}
        <div className="auth-body text-center mt-6 text-sm text-[#8A8F9C]">
          By signing up, you agree to our{" "}
          <Link href="/" className="text-[#3E63DD] hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/" className="text-[#3E63DD] hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;