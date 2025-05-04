
import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router';
import { errorHandler } from './middlewares/errorHandler';
import { AppError } from './utils/appError';
dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;
const JSONParser = express.json({ limit: '100mb' });
const URLEncoder = express.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 });

app.use(JSONParser);
app.use(URLEncoder);
app.use('/api', cors());
app.options('/api', cors());
app.use('/api', router);

// Not found resource error handler
app.use((req, res, next) => {
  next(new AppError('The requested resource was not found', 404));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});