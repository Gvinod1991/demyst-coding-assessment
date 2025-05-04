export class AppError extends Error {
  statusCode: number;
  timestamp: string;
  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }
}