import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import config from './config/index.js';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';

import postRoutes from './routes/api/post.js';
import userRoutes from './routes/api/user.js';

const {MONGO_URI} = config;
const app = express()

app.use(hpp())
app.use(helmet())

app.use(cors({
    origin:true,
    credentials:true
}))
app.use(morgan("dev"))
app.use(express.json()) //json형태로 해석해 달라


mongoose.connect(MONGO_URI, {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true
    }
).then(()=>console.log("MongoDB Connected!"))
.catch(err => console.log(err))


//Use routes
app.get('/');
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

export default app;
//module화