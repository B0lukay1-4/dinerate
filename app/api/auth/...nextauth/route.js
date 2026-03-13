import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";

import {connectToDB} from '@utils/database';

// to handle authentication
const handler = NextAuth({
    // then the options object
    providers:[
        // then another options object
        GoogleProviders({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){

    },
       async signIn({profile}){
        try{
// serveless -> Lambda ->db 
        }catch (error){

        }

    },

})
export { handler as GET, handler as POST };