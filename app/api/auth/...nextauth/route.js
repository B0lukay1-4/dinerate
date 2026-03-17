import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      return session; // just return the session as is
    },
    async signIn({ profile }) {
      return true; // just return true to allow sign in
    },
  },
});

export { handler as GET, handler as POST };