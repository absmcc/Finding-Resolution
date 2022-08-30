import express from "express"
import cors from "cors"
import functions from "firebase-functions"
import { getAllUsers } from "./src/users.js"

// import admin from firebase-admin;
// import  getDailyMessage  from './src/dailyMessages';

const app = express()
app.use(cors())
app.use(express.json())

// export {
//     createNewUser,
//     updateUser,
//     getUserById,
//     getAllUsers,
// }
// const {dailyMessages } = ('/src/dailyMessages');
// app.get('/rest/users/:userId', getUserById);
app.get("/rest/users", getAllUsers)
// app.post('/rest/newUser', createNewUser);
// app.patch('/rest/updateUser', updateUser);

// app.get('/rest/dailyMessages', getDailyMessage);

export const api = functions.https.onRequest(app)
