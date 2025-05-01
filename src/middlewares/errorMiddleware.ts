import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statusCode?: number;
  details?: any;
}

const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    details: err.details || null,
  });

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(err.details && { details: err.details }),
  });
};

export default errorMiddleware;
