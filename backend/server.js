import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import key from './config/key';
import noteRoutes from './routes/noteRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config()
const mongodbUrl = key.MONGODB_URL;
mongoose.connect(mongodbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
   console.log('Database is connected successfully on port 27017!!!');
});

const app = express();
app.use(bodyParser.json());


app.use('/api/note', noteRoutes);
app.use('/api/users', userRoutes);



const port = key.PORT;

app.listen(port, () => {
   console.log(`Server is conntected at ${port}`);
});
