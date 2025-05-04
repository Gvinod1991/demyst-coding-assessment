import { Request, Response, NextFunction } from "express";
import { fetchXeroBalanceSheet } from "../services/balanceSheetService";
import { AppError } from "../../utils/appError";

export const example = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ status: true, message: "Hello world!" });
  } catch (err) {
    next(new AppError("An error occurred on the server"));
  }
};

export const getBalanceSheet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await fetchXeroBalanceSheet(req.query);
    res.status(200).json(data);
  } catch (err: unknown) {
    next(err);
  };
}