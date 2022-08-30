import { dbconnect } from "./dbConnect.js";

export async function getDailyMessage(req, res) {
const db = dbconnect()
const collection = await db.collection(dailyMessage)
.get()
.catch((err) => res.status(500).send(err))
const dailyMessage = collection.docs.map((doc) =>{
let dailyMessage = doc.data()
dailyMessage.id = doc.id
return task 
})
res.send(dailyMessage)
}

export async function user1(req, res) {


}