import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your actual admin logic
        const isAdmin =
          credentials.username === "admin" &&
          credentials.password === "admin123";

        if (isAdmin) {
          return { id: "1", name: "Admin", role: "admin" };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin-login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role || "admin";
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
});
