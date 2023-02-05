import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "../../../lib/db";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const foundUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (foundUser == null) {
          throw new Error("Invalid Email");
        }

        const correctPassword = bcrypt.compareSync(
          credentials.password,
          foundUser.password
        );

        if (!correctPassword) {
          throw new Error("Invalid Password");
        }

        const { password, ...other } = foundUser;
        const user = other;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      token = { ...user, ...token };
      return token;
    },
    async session({ session, token }) {
      session = { ...session, ...token };

      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
