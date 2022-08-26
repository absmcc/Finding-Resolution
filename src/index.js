import  express  from 'express';
import cors from 'cors'
import functions from 'firebase-functions';
import App from './App';

const app = express()

app.use(cors())
app.use(express.json())

app.get('/'user1, getUser1);
app.post('/user2', getUser2);



const port = 3040
app.use(express.json())

export const api = function.https.onRequest(app)
