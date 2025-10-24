import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";




export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Email', type: 'email', placeholder: 'Enter your email' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
      },
      async authorize(credentials) {
        // for sign in 
        // console.log("credentials : ", credentials)
        if (!credentials?.identifier || !credentials?.password) {
          throw new Error('Please provide both email and password');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.identifier },
        });

        if (!user) {
          throw new Error('No user found with this email');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user.id.toString(),
          email: user.email,
          fullname: user.fullName,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("credentials : ", credentials)
      if (!user.email) {
        return false;
      }

      const userInfo = await prisma.user.findUnique({
          where: { email: user.email },
      });
      
      user.name = userInfo?.fullName;

      return true
    },
    async jwt({ token, user }) {
      // console.log("user : ", user);
      // console.log("Token :", token)

      if(user){
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      
      return token
    },
    async session({ session, token }) {
      // console.log("Session : ", session)
      // console.log("Token: ", token)
      if(token){
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
      }

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
