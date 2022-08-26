import { initializeApp, cert, getApps } from "firebase/app";
import {getFirestore} from 'firebase-admin/firestore'
import { credentials } from "../functions/node_modules/.bin/credentials";

initializeApp({
    credential: cert(credentials)

});

export function dbconnect(){
    if(!getApps().length{
        initializeApp({
          credential: cert(credentials)  
        })
return getFirestore();
    }
}






