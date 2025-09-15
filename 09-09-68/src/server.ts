import express from 'express';
import router from './app';
import dotenv from "dotenv";
dotenv.config();

export const app: express.Application = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});