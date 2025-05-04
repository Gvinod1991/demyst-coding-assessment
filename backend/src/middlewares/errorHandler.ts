import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const timestamp = err instanceof AppError ? err.timestamp : new Date().toISOString();
  const message = err instanceof AppError || err instanceof Error ? err.message : 'Internal Server Error';
  // Handle 404 Not Found errors
  if (statusCode === 404) {
    res.status(404).json({
      error: {
        message: "The requested resource was not found",
        timestamp,
        path: req.path,
      }
    });
    return;
  }
  res.status(statusCode).json({
    error: {
      message,
      timestamp,
      path: req.path,
    }
  });
};